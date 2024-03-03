import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./private.routes";
import Login from "../pages/Login";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<PrivateRoutes />} />
    </Routes>
  );
};

export default Router;
