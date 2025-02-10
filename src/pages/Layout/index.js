import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const hideSidebarPaths = ["/assesmentcall"];
  const showSidebar = !hideSidebarPaths.includes(location.pathname);
  return (
    <Box display="flex" height="100vh" bgcolor="background.bg">
       {showSidebar  && <Sidebar />}
      <Outlet />
    </Box>
  );
};

export default Layout;
