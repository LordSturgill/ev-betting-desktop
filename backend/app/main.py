
from fastapi import FastAPI
from app.routers import odds
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS for local React dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(odds.router)

@app.get("/")
def root():
    return {"message": "Welcome to the Positive EV Bets API"}
