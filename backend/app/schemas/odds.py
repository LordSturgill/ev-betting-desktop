
from pydantic import BaseModel

class OddsOut(BaseModel):
    team: str
    sportsbook: str
    odds: float
    implied_prob: float
    ev: float

    class Config:
        orm_mode = True
