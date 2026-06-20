from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from database import get_db, engine
from models import Base, RiskRecord
from schemas import RiskRequest, RiskResponse
from risk_engine import analyze_risk

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="TraceAI Backend")


@app.get("/")
def home():
    return {"message": "TraceAI backend is running 🚀"}


@app.post("/analyze", response_model=RiskResponse)
def analyze(request: RiskRequest, db: Session = Depends(get_db)):

    score, level, explanation = analyze_risk(request.input_data)

    record = RiskRecord(
        user_id=request.user_id,
        input_data=request.input_data,
        risk_score=score,
        risk_level=level,
        explanation=explanation
    )

    db.add(record)
    db.commit()
    db.refresh(record)

    return {
        "risk_score": score,
        "risk_level": level,
        "explanation": explanation
    }