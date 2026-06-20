from pydantic import BaseModel


class RiskRequest(BaseModel):
    user_id: str
    input_data: str


class RiskResponse(BaseModel):
    risk_score: float
    risk_level: str
    explanation: str