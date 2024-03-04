import CssBaseline from "@mui/material/CssBaseline";
import Router from "./routes";
import AppProvider from "./AppProvider";
import { Alert } from "./components";


const App = () => {
  return (
      <AppProvider>
        <CssBaseline />
        <Router />
        <Alert />
      </AppProvider>
  );
};

export default App;
