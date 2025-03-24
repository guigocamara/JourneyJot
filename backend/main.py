import os
import httpx
from fastapi import FastAPI

app = FastAPI()

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

