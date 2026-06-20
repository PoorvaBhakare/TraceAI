from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.orm import declarative_base
from datetime import datetime

Base = declarative_base()


class RiskRecord(Base):
    """
    This table stores each risk evaluation request/result
    """

    __tablename__ = "risk_records"

    id = Column(Integer, primary_key=True, index=True)

    # Who/what is being analyzed
    user_id = Column(String, index=True)

    # Input data (could be transaction text, behavior data, etc.)
    input_data = Column(String)

    # AI risk output
    risk_score = Column(Float)   # 0.0 → 1.0

    risk_level = Column(String)  # LOW / MEDIUM / HIGH

    explanation = Column(String)

    created_at = Column(DateTime, default=datetime.utcnow)