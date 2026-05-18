CREATE TABLE monitoring_logs (
    id SERIAL PRIMARY KEY,
    content TEXT,
    matched_keywords TEXT,
    risk_level TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);
