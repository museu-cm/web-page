// usuario
export type Usuario = {
  idUsuario: string;
  nomeCompleto: string;
  dataNascimento: string;
  email: string;
  situacao: number;
};

export type PostLogin = {
  token: string;
  refreshToken: string;
  usuario: Usuario;
};