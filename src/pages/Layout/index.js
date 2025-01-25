import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box display="flex" height="100vh" bgcolor="background.bg">
      <Sidebar />
      <Outlet />
    </Box>
  );
};

export default Layout;
