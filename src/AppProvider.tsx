import { PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import theme from "./styles/theme";
import { UserProvider } from "./context";

const AppProvider = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <UserProvider>{children}</UserProvider>
    </BrowserRouter>
  </ThemeProvider>
);

export default AppProvider;
