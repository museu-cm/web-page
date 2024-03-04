
export default function onErrorLogin(error: any) {
  const title = "Erro no login";
  let message = "Houve um problema ao realizar a requisição";

  if (
    error?.response?.status === 401 &&
    error?.response?.data?.data?.error_description ===
      "Invalid user credentials"
  ) {
    message = "Usuário ou senha incorretos.";
  }

  if (error?.response?.status === 400 && error?.response?.data?.message) {
    message = error?.response?.data?.message;
  }

  return {
    message,
    title,
  };
}
