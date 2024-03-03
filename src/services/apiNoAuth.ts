import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const apiCoftClient = axios.create({
  baseURL,
});


export async function postRefreshToken(refreshToken: string) {
  const response = await apiCoftClient.post<{
    access_token: string;
    refresh_token: string;
  }>("v1/auth/refresh-token-usuario", {
    refreshToken,
  });

  return response.data;
}

export default apiCoftClient;
