import { showAlert } from "./showAlert";

export default function handleError(options: {
  error: any;
  messageOnError?: string;
}) {
  let message = options.messageOnError
    ? options.messageOnError
    : "Houve um problema ao realizar a requisição";

  if (
    options.error?.response?.status === 401 &&
    options.error?.response?.data?.data?.error_description ===
      "Invalid user credentials"
  ) {
    message = "Usuário ou senha incorretos.";
  }

  if (
    options.error?.response?.status === 400 &&
    options.error?.response?.data?.message
  ) {
    message = options.error?.response?.data?.message;
  }

  if (options.error?.response?.status === 403) {
    message = "Você não tem permissão para executar esta ação.";
  }

  if (options.error?.response?.status === 500) {
    message = "Houve um problema em nossos servidores";
  }

  showAlert({
    message,
    type: "error",
  });

}
