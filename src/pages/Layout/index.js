import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import { Path } from "../../constants";

const Layout = () => {
  const location = useLocation();
  const hideSidebarPaths = [Path.ASSESSMENTCALL, Path.INTERVIEW];
  const hideHeader = [Path.ASSESSMENTCALL];
  const showSidebar = !hideSidebarPaths.includes(location.pathname);
  const showHeader = !hideHeader.includes(location.pathname);
  console.log(showHeader, "header");

  return (
    <Box display="flex" height="100vh" bgcolor="background.bg">
      {showSidebar && <Sidebar />}
      {showHeader ? (
        <Box component="main" flexGrow={1} p={3} overflow="auto">
          <Header />
          <Outlet />
        </Box>
      ) : (
        <Outlet />
      )}
    </Box>
  );
};

export default Layout;
