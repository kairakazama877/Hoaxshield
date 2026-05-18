from fastapi import APIRouter
from pydantic import BaseModel
from services.keyword_engine import detect_keywords

router = APIRouter(prefix="/monitor")

logs = []

class MonitorRequest(BaseModel):
    content: str

@router.post('/analyze')
def analyze(req: MonitorRequest):
    result = detect_keywords(req.content)

    logs.append({
        "content": req.content,
        "risk_level": result["risk"],
        "matches": result["matches"]
    })

    return result

@router.get('/logs')
def get_logs():
    return logs
