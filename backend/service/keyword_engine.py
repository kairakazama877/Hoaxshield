KEYWORDS = [
    "korupsi kutai barat",
    "jalan rusak kutai barat",
    "pemda kubar bobrok",
    "proyek mangkrak kubar",
    "isu negatif pemda"
]

def detect_keywords(text: str):
    matches = []
    lowered = text.lower()

    for keyword in KEYWORDS:
        if keyword in lowered:
            matches.append(keyword)

    risk = "safe"
    if len(matches) >= 3:
        risk = "high-risk"
    elif len(matches) >= 1:
        risk = "suspicious"

    return {
        "matches": matches,
        "risk": risk
    }
