
from sqlalchemy import Column, Integer, String, Float
from app.db.base_class import Base

class Odds(Base):
    __tablename__ = "odds"

    id = Column(Integer, primary_key=True, index=True)
    team = Column(String, index=True)
    sportsbook = Column(String, index=True)
    odds = Column(Float)
    implied_prob = Column(Float)
