import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveSession } from "../../services/session";
import { ILoginDto, LoginDto } from "../../services/dto/loginDto";
import { postLogin } from "../../services/apiNoAuth";
import onErrorLogin from "./onErrorLogin";

type DetailsAlert = {
  title: string;
  description: string;
  isOpen: boolean;
};

export default function useLogin() {
  const navigate = useNavigate();

  const ambiente = import.meta.env.VITE_NODE_ENV;

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      senha: "",
    },
    resolver: yupResolver(LoginDto),
  });


  const [detailsAlert, setDetailsAlert] = useState<DetailsAlert>({
    title: "",
    description: "",
    isOpen: false,
  });


  const onSubmitLogin = async (values: ILoginDto) => {
    const {senha, email } = values;
    try {
      
      if(ambiente === "development"){
        const user = {
          id: 1,
          nome: "Admin",
          email: "teste@gmail.com",
        };
        localStorage.setItem("@museu:user", JSON.stringify(user));
        saveSession("teste", "teste", true);


      } else{

        const {
          usuario: user,
          refreshToken,
          token,
        } = await postLogin({
          senha,
          email,
        });
        
        localStorage.setItem("@museu:user", JSON.stringify(user));
        saveSession(token, refreshToken, true);
      }

        localStorage.setItem("@museu:keep-connected", "on");

      navigate("/dashboard", {
        replace: true,
      });
    } catch (error) {
      const { message, title } = onErrorLogin(error);
      setDetailsAlert({ title, description: message, isOpen: true });
    }
  };


  return {
    control,
    errors,
    isSubmitting,
    onSubmitLogin,
    detailsAlert,
    setDetailsAlert,
    handleSubmit,
    setValue,
  };
}
