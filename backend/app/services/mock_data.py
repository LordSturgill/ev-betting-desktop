
from app.models.odds import Odds
from app.db.session import SessionLocal
from sqlalchemy.orm import Session

def insert_mock_odds():
    db: Session = SessionLocal()
    db.query(Odds).delete()  # Clear old for demo purposes

    sample_data = [
        {"team": "Team A", "sportsbook": "fanduel", "odds": -110, "implied_prob": 0.524},
        {"team": "Team B", "sportsbook": "fanduel", "odds": +120, "implied_prob": 0.455},
        {"team": "Team C", "sportsbook": "fanduel", "odds": +150, "implied_prob": 0.400},
        {"team": "Team D", "sportsbook": "fanduel", "odds": -105, "implied_prob": 0.510}
    ]

    for item in sample_data:
        db.add(Odds(**item))
    db.commit()
    db.close()
