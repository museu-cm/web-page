import {
  createContext,
  useState,
  PropsWithChildren,
  useMemo,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { useNavigate } from "react-router-dom";
// import api, { getUsuario } from "../services/api";
// import { Usuario } from "../@types/api";

type TokensUser = {
  refreshToken: string;
  token: string;
};

type Usuario = {
  nome: string;
};
export type UserContextData = {
  user?: Usuario;
  setUser: Dispatch<SetStateAction<Usuario | undefined>>;
  tokensUser?: TokensUser;
  setTokensUser: Dispatch<SetStateAction<TokensUser | undefined>>;
  isGettingDataUserStorage: boolean;
};

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<Usuario | undefined>();
  const [tokensUser, setTokensUser] = useState<TokensUser | undefined>();
  const [isGettingDataUserStorage, setIsGettingDataUserStorage] =
    useState(true);

  const getUsuario = async () => {
    console.log("getUsuario");
    return { nome: "teste" };
  }

  const getUser = async () => {
    // TODO: implementar get usuario
    const response = await getUsuario();

    setUser(response);
    localStorage.setItem("@museu:user", JSON.stringify(response));
  };

  useEffect(() => {
    const tokensUserStorage = localStorage.getItem("@museu:tokens-user");
    const userStorage = localStorage.getItem("@museu:user");
    const keepConnected = localStorage.getItem("@museu:keep-connected");

    if (tokensUserStorage && userStorage && keepConnected) {
      const tokensUserStorageParsed = JSON.parse(tokensUserStorage);
      const userStorageParsed = JSON.parse(userStorage);

      setTokensUser(tokensUserStorageParsed);
      setUser(userStorageParsed);

      // api.defaults.headers.common.authorization = `Bearer ${tokensUserStorageParsed.token}`;

      getUser();
    } else {
      navigate("/");
    }

    setIsGettingDataUserStorage(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = useMemo(() => {
    return {
      user,
      setUser,
      tokensUser,
      setTokensUser,
      isGettingDataUserStorage,
    };
  }, [isGettingDataUserStorage, tokensUser, user]);

  return <UserContext.Provider value={data}> {children} </UserContext.Provider>;
};

export { UserProvider, UserContext };
