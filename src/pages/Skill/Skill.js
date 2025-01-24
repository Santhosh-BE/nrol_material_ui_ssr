import React, { useState } from "react";
import { Card, CardContent, Divider, useMediaQuery } from "@mui/material";

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
import AccessTime from "@mui/icons-material/AccessTime"; 
import QuestionAnswer from "@mui/icons-material/QuestionAnswer"; 

const Skill = () => {
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

  const isTabletOrHigher = useMediaQuery("(min-width:1024px)");

  const isMobile = useMediaQuery("(max-width:600px)"); // Check if the screen is mobile-sized

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
            backgroundColor: "#1F2029",
            padding: isMobile ? "0px" : "20px", // Set padding to 0px on mobile
            marginTop: isMobile ? "20px" : "0px", // Set padding to 0px on mobile
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Total Score Card Section */}
          <Box
            sx={{
              backgroundColor: "#414350",
              borderRadius: "8px",
              padding: "20px",
            }}
          >
            {/* Total Score Card */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "flex-start",
                gap: "20px", // Space between columns
              }}
            >
              {/* Left Section */}
              <Box
                sx={{
                  flex: 5,
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "white", fontSize: "16px" }}
                  >
                    Total Score
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: "white", fontSize: "20px" }}
                  >
                    999/1000
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "white", fontSize: "16px" }}
                  >
                    Test Rank
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: "white", fontSize: "20px" }}
                  >
                    99/100
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "lightgreen", fontSize: "14px" }}
                >
                  ✅ Qualified the 999 Passing Score
                </Typography>
              </Box>

              {/* Right Section */}
              <Box sx={{ flex: 7, width: "-webkit-fill-available" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontSize: "16px", mb: "8px" }}
                >
                  Global Benchmarking
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    height: "20px",
                    backgroundColor: "#666",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      width: "10%",
                      height: "100%",
                      backgroundColor: "#30866D",
                    }}
                  ></Box>
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: "white",
                    fontSize: "12px",
                    mt: "8px",
                    display: "block",
                  }}
                >
                  Top 10% out of 1,75,000 Candidates
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Upcoming Assessment Section */}
          <Box
            sx={{
              backgroundColor: "#414350",
              borderRadius: "8px",
              padding: "20px",
            }}
          >
            <Typography variant="h6" sx={{ color: "white", mb: "16px" }}>
              Upcoming Assessments
            </Typography>
            {[...Array(3)].map((_, index) => (
              <Box
                key={index}
                sx={{
                  border: "1px solid #B8BAC7",
                  borderRadius: "8px",
                  height: isMobile ? "auto" : "80px", // Auto height on mobile
                  padding: "16px",
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row", // Stack content on mobile
                  justifyContent: "space-between",
                  alignItems: isMobile ? "flex-start" : "center", // Align items differently
                  mb: "16px",
                }}
              >
                <Box
                  sx={{ display: "flex", gap: "16px", alignItems: "center" }}
                >
                  {!isMobile && (
                    <Box
                      sx={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "green",
                      }}
                    ></Box>
                  )}
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        mb: isMobile ? "12px" : "4px", // Margin top for mobile
                      }}
                    >
                      Communication Assessment
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255, 255, 255, 0.6)",
                        fontSize: "12px",
                      }}
                    >
                      November 26, 2024 | 10:00 AM
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row", // Stack on mobile
                    gap: "24px",
                    alignItems: isMobile ? "flex-start" : "center", // Align items differently
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      flexDirection: isMobile ? "row" : "column", // Stack icons and text vertically on mobile
                    }}
                  >
                    <AccessTime sx={{ color: "white", fontSize: "16px" }} />
                    <Typography
                      variant="body2"
                      sx={{ color: "white", fontSize: "12px" }}
                    >
                      30 Min
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      flexDirection: isMobile ? "row" : "column", // Stack icons and text vertically on mobile
                    }}
                  >
                    <QuestionAnswer sx={{ color: "white", fontSize: "16px" }} />
                    <Typography
                      variant="body2"
                      sx={{ color: "white", fontSize: "12px" }}
                    >
                      20 Questions
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#30866D",
                      color: "white",
                      fontSize: "12px",
                      px: 2,
                      "&:hover": { backgroundColor: "#256d52" },
                      mt: isMobile ? "12px" : "0", // Add margin top on mobile for button
                    }}
                  >
                    Enroll Now
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Previous Assessment Section */}
          <Box
            sx={{
              backgroundColor: "#414350",
              borderRadius: "8px",
              padding: "20px",
            }}
          >
            <Typography variant="h6" sx={{ color: "white", mb: "16px" }}>
              Previous Assessments
            </Typography>
            {[...Array(2)].map((_, index) => (
              <Box
                key={index}
                sx={{
                  border: "1px solid #B8BAC7",
                  borderRadius: "8px",
                  height: isMobile ? "auto" : "80px", // Auto height on mobile
                  padding: "16px",
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row", // Stack content on mobile
                  justifyContent: "space-between",
                  alignItems: isMobile ? "flex-start" : "center", // Align items differently
                  mb: "16px",
                }}
              >
                <Box
                  sx={{ display: "flex", gap: "16px", alignItems: "center" }}
                >
                  {!isMobile && (
                    <Box
                      sx={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "green",
                      }}
                    ></Box>
                  )}
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        mb: isMobile ? "12px" : "4px", // Margin top for mobile
                      }}
                    >
                      Full-Stack Technical Interview
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255, 255, 255, 0.6)",
                        fontSize: "12px",
                      }}
                    >
                      November 27, 2024 | 10:00 AM
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row", // Stack on mobile
                    gap: "24px",
                    alignItems: isMobile ? "flex-start" : "center", // Align items differently
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      flexDirection: isMobile ? "row" : "column", // Stack icons and text vertically on mobile
                    }}
                  >
                    <AccessTime sx={{ color: "white", fontSize: "16px" }} />
                    <Typography
                      variant="body2"
                      sx={{ color: "white", fontSize: "12px" }}
                    >
                      30 Min
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      flexDirection: isMobile ? "row" : "column", // Stack icons and text vertically on mobile
                    }}
                  >
                    <QuestionAnswer sx={{ color: "white", fontSize: "16px" }} />
                    <Typography
                      variant="body2"
                      sx={{ color: "white", fontSize: "12px" }}
                    >
                      20 Questions
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "white", fontSize: "12px" }}
                    >
                      Total Score: 85%
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#30866D",
                      color: "white",
                      fontSize: "12px",
                      px: 2,
                      "&:hover": { backgroundColor: "#256d52" },
                      mt: isMobile ? "12px" : "0", // Add margin top on mobile for button
                    }}
                  >
                    View
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        ; ;{/* close content section */}
      </Box>
    </Box>
  );
};

export default Skill;
