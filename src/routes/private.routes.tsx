import { Route, Routes, Navigate } from "react-router-dom";
import { clearSession, getSession } from "../services/session";
import { clearUserLogged } from "../services/userInfo";
import Dashboard from "../components/Navigation/Dashboard";
import DashboardPage from "../pages/DashboardPage";

const PrivateRoutes = () => {
  const session = getSession();

  if (!session?.accessToken) {
    clearSession();
    clearUserLogged();
    return <Navigate to="/login" />;
  }

  return (
    // <Box
    //   display="flex"
    //   flexDirection="column"
    //   component="main"
    //   sx={{
    //     bgcolor: theme.palette.background.default,
    //     height: "100%",
    //   }}
    // >
    <Dashboard>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Dashboard>
    // </Box>
  );
};

export default PrivateRoutes;
