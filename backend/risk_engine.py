def analyze_risk(input_data: str):
    text = input_data.lower()

    # Simple heuristic logic (temporary brain)
    high_risk_keywords = ["fraud", "hack", "scam", "illegal", "attack"]
    medium_risk_keywords = ["delay", "issue", "error", "problem"]

def analyze_risk(transaction_count,
                 pass_through_ratio,
                 linked_accounts):

    score = 0

    score += transaction_count * 2

    score += pass_through_ratio * 50

    score += linked_accounts * 5

    if score > 80:
        return "HIGH"

    elif score > 40:
        return "MEDIUM"

    return "LOW"