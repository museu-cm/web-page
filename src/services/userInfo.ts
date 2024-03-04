import { Usuario } from "../@types/api";

export function saveUserLogged(data: Usuario) {
  localStorage.setItem("@museu:user-info", JSON.stringify(data));
}

export function getUserLogged(): Usuario | null {
  const data = localStorage.getItem("@museu:user-info");
  if (data) {
    return JSON.parse(data);
  }
  return null;
}

export function clearUserLogged() {
  localStorage.removeItem("@museu:user-info");
}
