import fetch from "node-fetch";

export async function fetchWikinews() {
  const url = process.env.WIKINEWS_API_URL;

  const res = await fetch(url);
  if (!res.ok) return [];

  const data = await res.json();
  return data.items || [];
}
