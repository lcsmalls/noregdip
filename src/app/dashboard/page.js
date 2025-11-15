import { getLogs } from "@/lib/store";

export default async function Dashboard() {
  const logs = await getLogs();

  return (
    <main>
      <h1>Daily Logs</h1>
      {logs.length === 0 && <p>No logs yet.</p>}
      <ul>
        {logs.map((entry, i) => (
          <li key={i}>
            <strong>{entry.date}</strong> — {entry.message}
          </li>
        ))}
      </ul>
    </main>
  );
}
