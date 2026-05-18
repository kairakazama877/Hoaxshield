import { useState } from 'react';
import axios from 'axios';

export default function Monitoring() {
  const [content, setContent] = useState('');
  const [result, setResult] = useState<any>(null);

  const analyze = async () => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/monitor/analyze`, {
      content,
    });
    setResult(res.data);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Analyze Content</h1>
      <textarea
        className="border w-full p-2 mt-4"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={analyze} className="mt-4 px-4 py-2 border rounded">
        Analyze
      </button>
      {result && (
        <div className="mt-4">
          <p>Risk: {result.risk}</p>
          <p>Matches: {result.matches.join(', ')}</p>
        </div>
      )}
    </div>
  );
}
