import axios, { AxiosError } from "axios";
import { redirectToLogin } from "../utils/redirect";
import { getSession, saveSession } from "./session";
import { postRefreshToken } from "./apiNoAuth";
import { Usuario } from "../@types/api";

const baseURL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL,
});

type FailedRequestsQueue = {
  onSuccess: () => void;
  onFailure: () => void;
};

let isRefreshing = false;
let failedRequestsQueue: FailedRequestsQueue[] = [];

function onFailureRefreshToken() {
  redirectToLogin();
}

api.interceptors.request.use(
  async (config) => {
    const session = getSession();
    if (session?.accessToken) {
      if (config.headers) {
        config.headers.authorization = `Bearer ${session.accessToken}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error?.response?.status === 401) {
      const originalConfig = error.config;

      const session = getSession();

      if (!isRefreshing) {
        isRefreshing = true;

        postRefreshToken(session?.refreshToken!)
          .then((response) => {
            const { access_token, refresh_token } = response;

            api.defaults.headers.common.authorization = `Bearer ${access_token}`;

            if (originalConfig?.headers) {
              originalConfig.headers.authorization = `Bearer ${access_token}`;
            }

            saveSession(access_token, refresh_token, session.remember);

            failedRequestsQueue.forEach((request) => request.onSuccess());
            failedRequestsQueue = [];
          })
          .catch(() => {
            failedRequestsQueue.forEach((request) => request.onFailure());
            failedRequestsQueue = [];

            onFailureRefreshToken();
          })
          .finally(() => {
            isRefreshing = false;
          });
      }

      return new Promise((resolve, reject) => {
        failedRequestsQueue.push({
          onSuccess: () => {
            resolve(api(originalConfig!));
          },
          onFailure: () => {
            reject(error);
          },
        });
      });
    }

    return Promise.reject(error);
  },
);



export async function getUsuario() {
  const response = await api.get<Usuario>("/v1/usuario");

  return response.data;
}