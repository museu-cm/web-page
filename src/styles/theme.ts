import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background:{
      default: "#c6e0d5",
      paper: "#F8F8F8",
    },
    primary: {
      light: "#4c7554",
      main: "#002E23",
      dark: "#002100",
    },
    secondary: {
      light: "",
      main: "#000000",
      dark: "",
    },
    grey: {
      100: "#F8F8F8",
      600: "#666666",
    },
    yellow: {
      main: "#FFD700",
      900: "#FCD212",
      200:  "#FEF5CD",
    },
    white: "#FFFFFF",
  },
});

export default theme;

