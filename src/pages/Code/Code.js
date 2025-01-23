import React, { useState } from "react";
import { Divider, MenuItem, Select, useMediaQuery } from "@mui/material";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  AppBar,
  Toolbar,
  TextField,
  Avatar,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import QuizIcon from "@mui/icons-material/Quiz";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import NrolModel from "../../Components/NrolModel";


const Code = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("CodePractice");
  const [showOutput, setShowOutput] = useState(false);

  const menuItems = [
    { id: "Dashboard", label: "Dashboard", icon: <DashboardIcon /> },
    { id: "Interview", label: "Interview", icon: <WorkIcon /> },
    { id: "CodePractice", label: "Code Practice", icon: <CodeIcon /> },
    { id: "Skilltest", label: "Skill Test", icon: <QuizIcon /> },
    { id: "Communication", label: "Communication", icon: <ChatIcon /> },
    { id: "Settings", label: "Settings", icon: <SettingsIcon /> },
    { id: "Profile", label: "Profile", icon: <PersonIcon /> },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  const isTabletOrHigher = useMediaQuery("(min-width:1024px)");

//   const CodeEditorWithOutput = () => {
  
    const handleSave = () => {
      setShowOutput(true);
    };
  
    const handleCloseOutput = () => {
      setShowOutput(false);
    };


  return (
    <Box display="flex" height="100vh" bgcolor="background.bg">
      {/* Sidebar */}
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
            {menuItems.map((item) => (
              <ListItem
                key={item.id}
                sx={{
                  padding: "10px 16px",
                  marginBottom: "24px",
                  borderRadius: "8px",
                  color: selectedMenu === item.id ? "#30866D" : "white",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
                onClick={() => setSelectedMenu(item.id)}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    height: "24px",
                    marginRight: isCollapsed ? "0" : "16px",
                    color: selectedMenu === item.id ? "#30866D" : "white",
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
      {/* clsoe sidebar */}

      {/* Main Content */}
      <Box component="main" flexGrow={1} p={3} overflow="auto">
        {/* mobile menu */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <img
            src={
              "https://res.cloudinary.com/dq0sgsxtz/image/upload/v1737466935/Mobilelogo_xpqjon.svg"
            }
            alt="Logo"
          />
          <img
            src={
              "https://res.cloudinary.com/dq0sgsxtz/image/upload/v1737466934/mobilemenu_imkm5l.svg"
            }
            alt="Menu"
          />
        </Box>

        {/* close mobile menu */}

        {/* search haeder */}
        <AppBar
          position="static"
          sx={{ bgcolor: "transparent", boxShadow: "none", padding: "0px" }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              height: "55px",
              padding: "0px",
            }}
          >
            {/* Search Input */}
            <Box
              sx={{
                position: "relative",
                flexGrow: 1,
                maxWidth: { xs: "75%", md: "50%", lg: "50%" },
                height: "55px",
              }}
            >
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Search"
                sx={{
                  height: "100%",
                  "& .MuiOutlinedInput-root": {
                    height: "100%",
                    padding: "0",
                    borderRadius: "8px",
                    backgroundColor: "#414350",
                    color: "#FFFFFF",
                    "& input": {
                      padding: "0 16px 0 40px",
                      fontSize: "0.875rem",
                      color: "#FFFFFF",
                    },
                    "& fieldset": {
                      borderColor: "#9999A5",
                    },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <SearchIcon
                      sx={{
                        position: "absolute",
                        left: 12,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#757575",
                        width: 20,
                        height: 20,
                      }}
                    />
                  ),
                }}
              />
            </Box>

            {/* Notifications and Profile Section */}
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              sx={{ height: "55px" }}
            >
              {/* Notifications Button */}
              <IconButton
                sx={{
                  position: "relative",
                  backgroundColor: "#414350",
                  borderRadius: "8px",
                  width: "55px",
                  height: "55px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #9999A5",
                  "&:hover": { backgroundColor: "#2B2B3C" },
                }}
              >
                <NotificationsIcon
                  sx={{ color: "#FFFFFF", fontSize: "32px" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    width: "12px",
                    height: "12px",
                    backgroundColor: "green",
                    borderRadius: "50%",
                    border: "2px solid #414350",
                  }}
                />
              </IconButton>

              {/* Profile Section */}
              <Box
                display={{ xs: "none", md: "flex" }}
                alignItems="center"
                gap={2}
                sx={{
                  backgroundColor: "#414350",
                  borderRadius: "8px",
                  height: "55px",
                  border: "1px solid #9999A5",
                  padding: "0 16px",
                }}
              >
                <img
                  src="https://res.cloudinary.com/dq0sgsxtz/image/upload/v1737466936/userinag_bn5fwl.svg"
                  alt="Profile"
                  style={{
                    width: isCollapsed ? "auto" : "auto",
                    height: "auto",
                  }}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Typography variant="body2" color="#FFFFFF">
                    Joy Wils
                  </Typography>
                  <Typography variant="caption" color="#B3B3B3">
                    joywills@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        {/* close serach haeder */}

        {/* Content Section */}
        <Box
          sx={{
            p: { xs: 0, sm: 3 },
          }}
        >
           <Box
      mt={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        gap: { xs: 2, lg: 3 },
        p: { sm: 3 },
        borderRadius: 3,
        backgroundColor: "#141319",
      }}
    >
      {/* Top Section - Dropdown and Buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        {/* Language Dropdown */}
        <Select
          defaultValue="javascript"
          sx={{
            width: "100%",
            maxWidth: 200,
            height: 50, // Fixed height for the dropdown
            p: 1,
            backgroundColor: "#141319",
            color: "white", // Text color inside the dropdown
            border: "1px solid",
            borderColor: "#30866D", // Border color
            borderRadius: 1,
            fontSize: "0.875rem",
          }}
        >
          <MenuItem value="javascript">JavaScript</MenuItem>
          <MenuItem value="python">Python</MenuItem>
          <MenuItem value="java">Java</MenuItem>
        </Select>

        {/* Buttons Section */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            sx={{
              width: 96,
              height: 50, // Fixed height for buttons
              fontSize: "0.875rem",
              color: "white",
              borderColor: "#30866D", // Updated border color
            }}
            onClick={handleSave}
          >
            Save
          </Button>
          <Button
            variant="contained"
            sx={{
              width: 96,
              height: 50, // Fixed height for buttons
              fontSize: "0.875rem",
              backgroundColor: "background.btnprimary",
            }}
          >
            Run
          </Button>
          <Button
            variant="contained"
            sx={{
              width: 96,
              height: 50, // Fixed height for buttons
              fontSize: "0.875rem",
              backgroundColor: "background.buttonnormal",
            }}
          >
            Fury AI
          </Button>
        </Box>
        <NrolModel/>
      </Box>

      {/* Bottom Section - Two Column Layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          flex: 1,
          gap: { xs: 2, lg: 3 },
        }}
      >
        {/* Left Section - Folder */}
        <Box
          sx={{
            width: { xs: "100%", lg: "20%" },
            p: 2,
            borderRadius: 2,
            backgroundColor: "#414350",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            position: "sticky",
            top: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" color="white">
              Folder
            </Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <img
                src={
                  "https://res.cloudinary.com/dq0sgsxtz/image/upload/v1737466933/file_hdmpc1.svg"
                }
                alt="New File"
                style={{ width: 24, height: 24, cursor: "pointer" }}
                title="Add File"
              />
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "gray" }}
              />
              <img
                src={
                  "https://res.cloudinary.com/dq0sgsxtz/image/upload/v1737466885/folder_dsk5vq.svg"
                }
                alt="New Folder"
                style={{ width: 24, height: 24, cursor: "pointer" }}
                title="Add Folder"
              />
            </Box>
          </Box>
        </Box>

        {/* Right Section - Code Editor and Output */}
        <Box
          sx={{
            flex: 1,
            p: 2,
            borderRadius: 2,
            backgroundColor: "#414350",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* Code Editor */}
          <Box
            sx={{
              p: 2,
              overflowY: "auto",
              maxHeight: { xs: 400, sm: 600 },
              backgroundColor: "#31333E",
              borderRadius: 2,
            }}
          >
            <Typography
              component="pre"
              sx={{
                fontSize: "0.75rem",
                lineHeight: 1.5,
                color: "rgba(255, 255, 255, 0.7)",
              }}
            >
              {`01\n02\n03\n04\n05\n06\n07\n08\n09\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33\n34`}
            </Typography>
          </Box>

          {/* Output Box */}
          {showOutput && (
            <Box
              sx={{
                p: 2,
                backgroundColor: "#1E1F29",
                borderRadius: 2,
                position: "relative",
                overflowY: "auto",
                maxHeight: { xs: 200, sm: 300 },
              }}
            >
              <IconButton
                onClick={handleCloseOutput}
                sx={{ position: "absolute", top: 8, right: 8, color: "white" }}
              >
                <CloseIcon />
              </IconButton>
              <Typography color="white" variant="body2">
                Output Text: Dummy result displayed here.
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
        </Box>
        {/* close content section */}
      </Box>
    </Box>
  );
// };
}
export default Code;
