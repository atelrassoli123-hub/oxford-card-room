from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="The Oxford Card Room API")
api_router = APIRouter(prefix="/api")


# ---------------- Models ----------------
class RSVPCreate(BaseModel):
    model_config = ConfigDict(extra="ignore")
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    college: Optional[str] = Field(default=None, max_length=120)
    event_id: str = Field(min_length=1, max_length=80)
    notes: Optional[str] = Field(default=None, max_length=600)


class RSVP(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    college: Optional[str] = None
    event_id: str
    notes: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class NewsletterCreate(BaseModel):
    model_config = ConfigDict(extra="ignore")
    email: EmailStr


class NewsletterSubscriber(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class EventInfo(BaseModel):
    id: str
    title: str
    date: str
    venue: str
    description: str
    category: str


# ---------------- Routes ----------------
@api_router.get("/")
async def root():
    return {"message": "The Oxford Card Room API"}


@api_router.get("/events", response_model=List[EventInfo])
async def list_events():
    return [
        EventInfo(
            id="boxing-night-2027",
            title="The Knockout Night",
            date="Friday · Week 4 · Michaelmas 2027",
            venue="The Union, Oxford",
            description="Our flagship Michaelmas evening — three sanctioned boxing bouts with a friendly book on each fighter, followed by a four-table No-Limit tournament. Open to every member, all skill levels welcome.",
            category="Flagship",
        ),
        EventInfo(
            id="regular-poker-night",
            title="Members' Night",
            date="Every Wednesday · Weeks 2 – 8",
            venue="Rotating Common Rooms",
            description="Our weekly evening — Beginners', Casual and Competitive tables running side by side. Drop in for an hour or stay for the night. New players especially welcome.",
            category="Recurring",
        ),
        EventInfo(
            id="poker-lecture-series",
            title="The Card Room Lectures",
            date="Tuesdays · Weeks 1, 3, 5, 7",
            venue="Oxford Faculty Rooms",
            description="Friendly evening talks from professional poker players, traders and game theorists. Past topics: how to play your first tournament, position basics, and the maths of bluffing. Free for members.",
            category="Educational",
        ),
    ]


@api_router.post("/rsvp", response_model=RSVP)
async def create_rsvp(payload: RSVPCreate):
    rsvp = RSVP(**payload.model_dump())
    doc = rsvp.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.rsvps.insert_one(doc)
    return rsvp


@api_router.get("/rsvp", response_model=List[RSVP])
async def list_rsvps():
    items = await db.rsvps.find({}, {"_id": 0}).to_list(1000)
    for it in items:
        if isinstance(it.get('created_at'), str):
            it['created_at'] = datetime.fromisoformat(it['created_at'])
    return items


@api_router.post("/newsletter", response_model=NewsletterSubscriber)
async def newsletter_subscribe(payload: NewsletterCreate):
    existing = await db.newsletter.find_one({"email": payload.email}, {"_id": 0})
    if existing:
        if isinstance(existing.get('created_at'), str):
            existing['created_at'] = datetime.fromisoformat(existing['created_at'])
        return NewsletterSubscriber(**existing)
    sub = NewsletterSubscriber(email=payload.email)
    doc = sub.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.newsletter.insert_one(doc)
    return sub


@api_router.get("/newsletter", response_model=List[NewsletterSubscriber])
async def list_newsletter():
    items = await db.newsletter.find({}, {"_id": 0}).to_list(2000)
    for it in items:
        if isinstance(it.get('created_at'), str):
            it['created_at'] = datetime.fromisoformat(it['created_at'])
    return items


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
