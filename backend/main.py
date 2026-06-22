from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import get_db, engine
from models import Base, RiskRecord
from schemas import RiskRequest, RiskResponse
from risk_engine import analyze_risk

Base.metadata.create_all(bind=engine)

app = FastAPI(title="TraceAI Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "TraceAI Backend Running"
    }


@app.post("/analyze", response_model=RiskResponse)
def analyze(
    request: RiskRequest,
    db: Session = Depends(get_db)
):

    score, level, explanation = analyze_risk(
        request.input_data
    )

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


@app.get("/sar")
def generate_sar():

    return {
        "report": """
Suspicious Activity Report

Pattern:
Pass Through Mule

Risk Score:
82/100

Evidence:
5 incoming transfers followed by rapid outgoing transfers.

Recommended Actions:
1. Freeze Network
2. Escalate Investigation
3. File AML Report
"""
    }