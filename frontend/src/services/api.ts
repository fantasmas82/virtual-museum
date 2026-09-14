const API_URL = "http://127.0.0.1:8000/api";

export async function getMuseums() {
  const response = await fetch(`${API_URL}/museums/`);

  if (!response.ok) {
    throw new Error("Failed to fetch museums");
  }

  return response.json();
}

export async function getSection(id: string) {
  const res = await fetch(`${API_URL}/sections/${id}/`);

  if (!res.ok) {
    throw new Error("Failed to fetch section");
  }

  return res.json();
}