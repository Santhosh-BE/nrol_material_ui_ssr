import React, { useEffect, useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useMediaQuery } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { SidebarOptions } from "../../constants";
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  const navigate = useNavigate();
  const location = useLocation();
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  const isTabletOrHigher = useMediaQuery("(min-width:1024px)");
  useEffect(() => {
    const currentPath = location.pathname.slice(1);
    const matchedMenu = SidebarOptions.find((item) => item.path === currentPath);
    if (matchedMenu) {
      setSelectedMenu(currentPath);
    }
  }, [location.pathname]);
  return (
    <div>
      {isTabletOrHigher && (
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: isCollapsed ? 100 : 280,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: isCollapsed ? 100 : 280,
              padding: isCollapsed ? "10px" : "20px",
              background:
                "linear-gradient(to bottom, rgba(32, 32, 40, 0.8) 0%, rgba(51, 53, 65, 1) 100%)",
              color: "white",
              overflowX: "hidden",
              transition: "width 0.3s",
            },
          }}
        >
          {/* Logo Section */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={3}
          >
            <img
              src={
                isCollapsed
                  ? "https://res.cloudinary.com/dq0sgsxtz/image/upload/v1737466937/jame_ugilru.svg"
                  : "https://res.cloudinary.com/dq0sgsxtz/image/upload/v1737466943/Logo_gwm51j.png"
              }
              alt="Logo"
              style={{
                width: isCollapsed ? "auto" : "auto",
                height: "auto",
                transition: "width 0.3s",
              }}
            />
          </Box>
          <Box borderBottom="1px solid rgba(153, 153, 163, 0.3)" mb={3}></Box>

          {/* Menu Items */}
          <List>
            {SidebarOptions.map((item) => (
              <ListItem
                key={item.id}
                sx={{
                  padding: "10px 16px",
                  marginBottom: "24px",
                  borderRadius: "8px",
                  color: selectedMenu === item.path ? "#30866D" : "white",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
                onClick={() => {
                  setSelectedMenu(item.path);
                  navigate(item.path);
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    height: "24px",
                    marginRight: isCollapsed ? "0" : "16px",
                    color: selectedMenu === item.path ? "#30866D" : "white",
                  }}
                >
                  {item.icon}
                </Box>
                {!isCollapsed && <ListItemText primary={item.label} />}
              </ListItem>
            ))}
          </List>

          {/* Collapse Button */}
          <Box
            position="absolute"
            bottom="20px"
            left="50%"
            sx={{
              transform: "translateX(-50%)",
            }}
          >
            <IconButton
              onClick={toggleSidebar}
              sx={{
                background: "rgba(255, 255, 255, 0.1)",
                color: "white",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </Box>
        </Drawer>
      )}
    </div>
  );
};

export default Sidebar;
