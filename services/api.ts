// La IP del profe cambia cada sesión — cámbiala aquí y ya
const BASE_URL = "http://10.141.99.185:5000";

export async function apiRequest(
  endpoint: string,
  method: "GET" | "POST",
  body?: object,
  token?: string
) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json();
  return { status: response.status, data };
}