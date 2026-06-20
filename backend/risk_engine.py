def analyze_risk(input_data: str):
    text = input_data.lower()

    # Simple heuristic logic (temporary brain)
    high_risk_keywords = ["fraud", "hack", "scam", "illegal", "attack"]
    medium_risk_keywords = ["delay", "issue", "error", "problem"]

    score = 0.1
    level = "LOW"
    explanation = "Normal behavior detected."

    for word in high_risk_keywords:
        if word in text:
            score = 0.9
            level = "HIGH"
            explanation = "High-risk pattern detected in input."
            return score, level, explanation

    for word in medium_risk_keywords:
        if word in text:
            score = 0.5
            level = "MEDIUM"
            explanation = "Some suspicious indicators found."
            return score, level, explanation

    return score, level, explanation