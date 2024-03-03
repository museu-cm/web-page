import { InferType, object, string } from "yup";

export type ILoginDto = InferType<typeof LoginDto>;

export const LoginDto = object({
  senha: string().required("Senha é obrigatória."),
  email: string().required("E-mail é obrigatório."),
});
