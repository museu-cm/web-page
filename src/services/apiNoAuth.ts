import axios from "axios";
import { ILoginDto } from "./dto/loginDto";
import { PostLogin } from "../@types/api";

const baseURL = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL,
});


export async function postRefreshToken(refreshToken: string) {
  const response = await apiClient.post<{
    access_token: string;
    refresh_token: string;
  }>("v1/auth/refresh-token-usuario", {
    refreshToken,
  });

  return response.data;
}

export async function postLogin(data: ILoginDto) {
  const { senha, email } = data;
  
  const response = await apiClient.post<PostLogin>("v1/usuario/login", {
    senha,
    email,
  });

  return response.data;
}

export default apiClient;
