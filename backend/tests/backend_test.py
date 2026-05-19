"""Backend tests for The Oxford Card Room API."""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://oxford-card-room.preview.emergentagent.com').rstrip('/')
# fallback to frontend/.env value
if not BASE_URL:
    with open('/app/frontend/.env') as f:
        for line in f:
            if line.startswith('REACT_APP_BACKEND_URL='):
                BASE_URL = line.split('=', 1)[1].strip().rstrip('/')

API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ----- Root -----
def test_root_greeting(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    data = r.json()
    assert "message" in data
    assert "Oxford" in data["message"]


# ----- Events -----
def test_events_returns_three(client):
    r = client.get(f"{API}/events")
    assert r.status_code == 200
    data = r.json()
    assert isinstance(data, list)
    ids = {e["id"] for e in data}
    assert {"boxing-night-2027", "regular-poker-night", "poker-lecture-series"}.issubset(ids)
    for e in data:
        for k in ("title", "date", "venue", "description", "category"):
            assert k in e and e[k]


# ----- RSVP -----
def test_rsvp_create_and_persist(client):
    payload = {
        "name": "TEST_User",
        "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
        "college": "Balliol",
        "event_id": "boxing-night-2027",
        "notes": "Looking forward to it"
    }
    r = client.post(f"{API}/rsvp", json=payload)
    assert r.status_code == 200, r.text
    body = r.json()
    assert body["name"] == payload["name"]
    assert body["email"] == payload["email"]
    assert body["event_id"] == payload["event_id"]
    assert "id" in body and isinstance(body["id"], str)

    # Verify persistence via GET list
    r2 = client.get(f"{API}/rsvp")
    assert r2.status_code == 200
    items = r2.json()
    assert any(it["id"] == body["id"] and it["email"] == payload["email"] for it in items)


def test_rsvp_invalid_email_returns_422(client):
    payload = {
        "name": "Bad Email",
        "email": "not-an-email",
        "event_id": "boxing-night-2027",
    }
    r = client.post(f"{API}/rsvp", json=payload)
    assert r.status_code == 422


def test_rsvp_get_list(client):
    r = client.get(f"{API}/rsvp")
    assert r.status_code == 200
    assert isinstance(r.json(), list)


# ----- Newsletter -----
def test_newsletter_subscribe_valid(client):
    email = f"news_{uuid.uuid4().hex[:8]}@example.com"
    r = client.post(f"{API}/newsletter", json={"email": email})
    assert r.status_code == 200, r.text
    body = r.json()
    assert body["email"] == email
    assert "id" in body


def test_newsletter_idempotent(client):
    email = f"news_idem_{uuid.uuid4().hex[:8]}@example.com"
    r1 = client.post(f"{API}/newsletter", json={"email": email})
    assert r1.status_code == 200
    id1 = r1.json()["id"]
    r2 = client.post(f"{API}/newsletter", json={"email": email})
    assert r2.status_code == 200
    id2 = r2.json()["id"]
    assert id1 == id2  # same record returned (idempotent)


def test_newsletter_invalid_email_returns_422(client):
    r = client.post(f"{API}/newsletter", json={"email": "garbage"})
    assert r.status_code == 422


def test_newsletter_get_list(client):
    r = client.get(f"{API}/newsletter")
    assert r.status_code == 200
    assert isinstance(r.json(), list)
