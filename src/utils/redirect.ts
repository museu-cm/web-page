import { useNavigate } from "react-router-dom";
import { clearSession } from "../services/session";
import { clearUserLogged } from "../services/userInfo";

export function redirectToLogin() {
  clearUserLogged(); 
  clearSession();
  
  const navigate = useNavigate();

  navigate("/login");
}