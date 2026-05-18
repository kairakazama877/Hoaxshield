from fastapi import FastAPI
from routes.monitor import router as monitor_router

app = FastAPI(title="HoaxShield Kutai Barat API")

app.include_router(monitor_router)

@app.get('/')
def root():
    return {"status": "HoaxShield backend active"}
