import { apiRequest } from "./api";

// Post para el registro
export async function registerUser(fullname: string, email: string, pswd: string) {
  return await apiRequest("/auth/register", "POST", { fullname, email, pswd });
}

// Post para el login
export async function loginUser(email: string, pswd: string) {
  return await apiRequest("/auth/login", "POST", { email, pswd });
}

// GET Para Welcome
export async function getWelcome(token: string) {
  return await apiRequest("/welcome", "GET", undefined, token);
}