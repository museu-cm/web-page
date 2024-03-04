import { ISession } from "../@types/session";

const storageAccessToken = "@museu:access_token";
const storageRefreshToken = "@museu:refresh_token";
const storageRemember = "@museu:remember";

export function saveSession(
  accessToken: string,
  refreshToken: string,
  remember: boolean,
) {
  if (remember) {
    localStorage.setItem(storageAccessToken, accessToken);
    localStorage.setItem(storageRefreshToken, refreshToken);
    localStorage.setItem(storageRemember, "true");
  } else {
    sessionStorage.setItem(storageAccessToken, accessToken);
    sessionStorage.setItem(storageRefreshToken, refreshToken);
    localStorage.removeItem(storageRemember);
  }
}

export function getSession(): ISession {
  const remember = localStorage.getItem(storageRemember);
  if (remember === "true") {
    return {
      accessToken: localStorage.getItem(storageAccessToken) ?? undefined,
      refreshToken: localStorage.getItem(storageRefreshToken) ?? undefined,
      remember: true,
    };
  }
  return {
    accessToken: sessionStorage.getItem(storageAccessToken) ?? undefined,
    refreshToken: sessionStorage.getItem(storageRefreshToken) ?? undefined,
    remember: false,
  };
}

export function clearSession() {
  localStorage.removeItem(storageAccessToken);
  localStorage.removeItem(storageRefreshToken);
  localStorage.removeItem(storageRemember);
  sessionStorage.removeItem(storageAccessToken);
  sessionStorage.removeItem(storageRefreshToken);
}

export function getCookieRefreshToken() {
  const cookies = document.cookie.split(";");

  let refreshToken = null;
  cookies.forEach((cookie) => {
    const [name, value] = cookie.trim().split("=");

    if (name === "museu-refresh-token") {
      refreshToken = decodeURIComponent(value);
    }
  });

  return refreshToken;
}

export function getCookieRememberSession() {
  const cookies = document.cookie.split(";");

  let val = null;
  cookies.forEach((cookie) => {
    const [name, value] = cookie.trim().split("=");

    if (name === "museu-remember") {
      val = decodeURIComponent(value);
    }
  });

  return val === "true";
}
