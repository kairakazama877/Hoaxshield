import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/monitor/logs`)
      .then(res => setLogs(res.data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Monitoring Dashboard</h1>
      {logs.map((log, idx) => (
        <div key={idx} className="border p-4 mb-2 rounded">
          <p>{log.content}</p>
          <strong>Risk:</strong> {log.risk_level}
        </div>
      ))}
    </div>
  );
}
