import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">HoaxShield Kutai Barat</h1>
      <p className="mt-4">Deteksi dini narasi publik & hoaks regional.</p>
      <Link href="/dashboard">Dashboard Monitoring</Link>
    </main>
  );
}
