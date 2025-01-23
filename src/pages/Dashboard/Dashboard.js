import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";

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
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

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

  const assessments = [
    {
      title: "Communication assessment",
      description: "Your interview with Company starts in 30 minutes.",
      additionalInfo: "November 27 , 2024 | 10:00 AM.",
      color: "#04AA06",
    },
    {
      title: "JavaScript Coding Test",
      description: "Your interview with Company starts in 30 minutes.",
      additionalInfo: "November 27, 2024 | 10:00 AM",
      color: "#0160D2",
    },
    {
      title: "React Js Coding Test",
      description: "Your interview with Company starts in 30 minutes.",
      additionalInfo: "November 28, 2024 | 10:00 AM",
      color: "#04AA06",
    },
  ];

  const isTabletOrHigher = useMediaQuery("(min-width:1024px)");

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
          mt={2}
          sx={{
            p: { xs: 0, sm: 3 },
          }}
        >
          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} lg={5}>
              {/* Assessment Section */}
              <Box
                bgcolor="background.cardbg"
                p={3}
                borderRadius={2}
                display="flex"
                flexDirection="column"
                height="100%"
              >
                <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
                  Assessment:
                </Typography>

                <Box display="flex" flexDirection="column" gap={2} flexGrow={1}>
                  {assessments.map((item, index) => (
                    <Box
                      key={index}
                      display="flex"
                      alignItems="center"
                      gap={2}
                      p={2}
                      border="1px solid #3C3C3C"
                      sx={{
                        borderColor: "#4B5563",
                        borderRadius: "12px",
                      }}
                    >
                      {/* Circle for the color indicator */}
                      <Box
                        width={8}
                        height={8}
                        borderRadius="50%"
                        bgcolor={item.color}
                      />
                      {/* Assessment Details */}
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "1rem",
                            fontWeight: 500,
                            color: "white",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "0.875rem",
                            fontWeight: 400,
                            color: "rgba(255, 255, 255, 0.8)",
                          }}
                        >
                          {item.description}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            fontSize: "0.75rem",
                            fontWeight: 300,
                            color: "rgba(255, 255, 255, 0.6)",
                          }}
                        >
                          {item.additionalInfo}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
                <Typography
                  variant="body2"
                  color="text.textprimary"
                  textAlign="right"
                  mt={2}
                  fontWeight="500"
                >
                  View all assessments →
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} lg={7}>
              {/* Improvement Areas Section */}
              <Box
                bgcolor="background.cardbg"
                p={3}
                borderRadius={2}
                display="flex"
                flexDirection="column"
                height="100%"
              >
                <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
                  Improvement areas:
                </Typography>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexGrow={1}
                >
                  <Box
                    component="img"
                    src="https://res.cloudinary.com/dq0sgsxtz/image/upload/v1737466935/Improvement_graph_mirbpn.svg"
                    alt="Graph"
                    sx={{
                      width: "auto",
                      height: "auto",
                      borderRadius: "inherit",
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  color="text.textprimary"
                  textAlign="right"
                  mt={2}
                  fontWeight="500"
                >
                  View all assessments →
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={2} alignItems="stretch">
            <Grid item xs={12} lg={6}>
              {/* Weekly Progress Section */}
              <Box
                bgcolor="background.cardbg"
                p={2}
                borderRadius={2}
                display="flex"
                flexDirection="column"
                height="100%"
              >
                <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
                  Your weekly progress:
                </Typography>
                <Box
                  mt={4}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexGrow={1}
                >
                  <Box
                    component="img"
                    src="https://res.cloudinary.com/dq0sgsxtz/image/upload/v1737466935/Weekprogress_mdcjdo.svg"
                    alt="Graph"
                    sx={{
                      width: "-webkit-fill-available",
                      height: "auto",
                      borderRadius: "inherit",
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  color="text.textprimary"
                  textAlign="right"
                  mt={2}
                  fontWeight="500"
                >
                  View details →
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} lg={6}>
              {/* Improvement Areas Section */}
              <Box
                bgcolor="background.cardbg"
                p={2}
                borderRadius={2}
                display="flex"
                flexDirection="column"
                height="100%"
              >
                <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
                  Improvement areas:
                </Typography>
                <Box mt={4} flexGrow={1}>
                  {/* Table Header */}
                  <Box display="flex" justifyContent="space-between" mb={2}>
                    <Typography sx={{ fontWeight: 500, color: "#fff" }}>
                      Language
                    </Typography>
                    <Typography sx={{ fontWeight: 500, color: "#fff" }}>
                      No. of Tests
                    </Typography>
                  </Box>

                  {/* Table Rows */}
                  {[
                    {
                      name: "JavaScript",
                      icon: "https://example.com/javascript-icon.svg",
                      tests: "1 test",
                    },
                    {
                      name: "CSS Grid",
                      icon: "https://example.com/css-grid-icon.svg",
                      tests: "1 test",
                    },
                    {
                      name: "Communication",
                      icon: "https://example.com/communication-icon.svg",
                      tests: "1 test",
                    },
                    {
                      name: "HTML",
                      icon: "https://example.com/html-icon.svg",
                      tests: "1 test",
                    },
                    {
                      name: "React",
                      icon: "https://example.com/react-icon.svg",
                      tests: "1 test",
                    },
                    {
                      name: "Node.js",
                      icon: "https://example.com/nodejs-icon.svg",
                      tests: "1 test",
                    },
                  ].map((item, index) => (
                    <Box
                      key={index}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={2}
                    >
                      <Box display="flex" alignItems="center" gap={2}>
                        {/* Language Icon */}
                        <img
                          src={item.icon}
                          alt={`${item.name} icon`}
                          style={{ width: "24px", height: "24px" }}
                        />
                        {/* Language Name */}
                        <Typography sx={{ color: "white" }}>
                          {item.name}
                        </Typography>
                      </Box>
                      {/* Test Count */}
                      <Typography
                        sx={{
                          color: "white",
                          marginLeft: "auto",
                          marginRight: "32px",
                        }}
                      >
                        {item.tests}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* View Details */}
                <Typography
                  variant="body2"
                  color="text.textprimary"
                  textAlign="right"
                  mt={2}
                  fontWeight="500"
                >
                  View all assessments →
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* close content section */}
      </Box>
    </Box>
  );
};

export default Dashboard;
