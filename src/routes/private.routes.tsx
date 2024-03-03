import { Route, Routes, Navigate } from "react-router-dom";
import { Box, useTheme } from "@mui/material";
import { clearSession, getSession } from "../services/session";
import { clearUserLogged } from "../services/userInfo";

const PrivateRoutes = () => {
  const theme = useTheme();
  const session = getSession();

  if (!session?.accessToken) {
    clearSession();
    clearUserLogged();
    return <Navigate to="/login" />;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      component="main"
      sx={{
        bgcolor: theme.palette.grey[100],
        height: "100%",
      }}
    >
      {/* <AppBar /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Box>
  );
};

export default PrivateRoutes;
