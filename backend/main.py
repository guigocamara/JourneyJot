import os
import httpx
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
api_key = os.getenv("GOOGLE_PLACES_KEY")
if not api_key:
    raise ValueError("GOOGLE_PLACES_KEY environment variable is not set.")

headers = {
    "Authorization": f"Bearer {api_key}"
},

GOOGLE_PLACES_KEY = os.getenv("GOOGLE_PLACES_KEY")

# Example endpoint for retrieving Chinese restaurants (5 at most) within 5-mile radius from the MET
@app.get("/top_chinese_restaurants")
async def get_top_chinese_restaurants():
    base_url = "https://places.googleapis.com/v1/places:searchNearby"
    headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": GOOGLE_PLACES_KEY,
        "X-Goog-FieldMask": "places.displayName,places.id,places.rating,places.userRatingCount"  # Add fields as necessary
    }
    request_body = {
        "includedTypes": ["chinese_restaurant"],
        "maxResultCount": 5,
        "locationRestriction": {
            "circle": {
                "center": {
                    "latitude": 40.7794, # Coordinates of MET
                    "longitude": -73.9632
                },
                "radius": 8046.72  # 5 miles in meters
            }
        }
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(base_url, headers=headers, json=request_body)

    if response.status_code == 200:
        data = response.json()
        places = data.get("places", [])

        return [ # Add fields as necessary
            {
                "place_id": place["id"],
                "name": place["displayName"]["text"],
                "rating": place.get("rating"),
                "user_ratings": place.get("userRatingCount")
            }
            for place in places
        ]
    else:
        return {"error": response.text, "status_code": response.status_code}




async def get_route_waypoints(start: str, end: str, mode: str):
    """Fetch route waypoints using Google Directions API"""
    directions_url = "https://maps.googleapis.com/maps/api/directions/json"
    async with httpx.AsyncClient() as client:
        response = await client.get(directions_url, params={
            "origin": start,
            "destination": end,
            "mode": mode,
            "key": GOOGLE_PLACES_KEY
        })

    if response.status_code != 200:
        return None
    
    data = response.json()
    if not data.get("routes"):
        return None

    waypoints = []
    for leg in data["routes"][0]["legs"]:
        for step in leg["steps"]:
            waypoints.append(step["start_location"])  # Capture lat/lng along the route

    return waypoints



async def get_restaurants_along_route(waypoints, restaurant_type):
    """Search for restaurants near waypoints"""
    places_url = "https://places.googleapis.com/v1/places:searchNearby"
    headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": GOOGLE_PLACES_KEY,
        "X-Goog-FieldMask": "places.displayName,places.id,places.rating,places.userRatingCount,places.location"
    }

    restaurants = []
    async with httpx.AsyncClient() as client:
        for point in waypoints:
            request_body = {
                "includedTypes": [restaurant_type + "_restaurant"],
                "maxResultCount": 5,
                "locationRestriction": {
                    "circle": {
                        "center": {"latitude": point["lat"], "longitude": point["lng"]},
                        "radius": 500  # Search 500m around the route
                    }
                }
            }
            response = await client.post(places_url, headers=headers, json=request_body)

            if response.status_code == 200:
                data = response.json()
                restaurants.extend(data.get("places", []))

    return restaurants


# Endpoint for retrieving restaurants along the route from point A to point B
@app.get("/restaurants_on_route")
async def get_restaurants_on_route(
    mode: str = Query(..., description="Mode of transport: driving, walking, transit"),
    start: str = Query(..., description="Starting location (address or coordinates)"),
    end: str = Query(..., description="Destination location (address or coordinates)"),
    restaurant_type: str = Query(..., description="Type of restaurant (e.g., sushi, pizza)")
):

    waypoints = await get_route_waypoints(start, end, mode)
    if not waypoints:
        return {"error": "Could not get route waypoints."}

    restaurants = await get_restaurants_along_route(waypoints, restaurant_type)
    if not restaurants:
        return {"message": "No restaurants found along the route."}

    return [{"name": r["displayName"]["text"], "rating": r.get("rating")} for r in restaurants]