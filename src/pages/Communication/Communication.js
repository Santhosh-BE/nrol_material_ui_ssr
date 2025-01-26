import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import {
  Box,
  IconButton,
  AppBar,
  Toolbar,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import AccessTime from "@mui/icons-material/AccessTime";
import ChevronRight from "@mui/icons-material/ChevronRight";
import MicIcon from "@mui/icons-material/Mic";

const Communication = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); // Check if the screen is mobile-sized

  return (
    <Box component="main" flexGrow={1} p={3} overflow="auto">
      {/* Mobile menu */}
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

      {/* Search header */}
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
              <NotificationsIcon sx={{ color: "#FFFFFF", fontSize: "32px" }} />
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
                  width: "auto",
                  height: "auto",
                }}
              />
              <Box display="flex" flexDirection="column" justifyContent="center">
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

      {/* Content Section */}
      <Box
        sx={{
          backgroundColor: "#1F2029",
          padding: isMobile ? "0px" : "20px",
          marginTop: isMobile ? "20px" : "0px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Record Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#30866D",
              borderRadius: "6px",
              padding: "12px",
              color: "white",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              "&:hover": { backgroundColor: "#256d52" },
            }}
            startIcon={<MicIcon sx={{ fontSize: "20px", color: "white" }} />}
          >
            Record Voice Notes
          </Button>
        </Box>

        {/* Total Score Card Section */}
        <Box
          sx={{
            backgroundColor: "#414350",
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
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
                <Typography variant="h6" sx={{ color: "white", fontSize: "16px" }}>
                  Total Score
                </Typography>
                <Typography variant="h4" sx={{ color: "white", fontSize: "20px" }}>
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
                <Typography variant="h6" sx={{ color: "white", fontSize: "16px" }}>
                  Test Rank
                </Typography>
                <Typography variant="h4" sx={{ color: "white", fontSize: "20px" }}>
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

        {/* Voice notes Section */}
        <Grid container spacing={2}>
          <Grid item xs={12} lg={5}>
            <Box
              sx={{
                backgroundColor: "#414350",
                borderRadius: "8px",
                padding: "20px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <ChevronLeft sx={{ color: "white", cursor: "pointer" }} />
                <Typography sx={{ color: "white", fontSize: "16px" }}>
                  January 2025
                </Typography>
                <ChevronRight sx={{ color: "white", cursor: "pointer" }} />
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7, 1fr)",
                  gap: 1,
                  textAlign: "center",
                }}
              >
                {[
                  "Mon",
                  "Tue",
                  "Wed",
                  "Thu",
                  "Fri",
                  "Sat",
                  "Sun",
                ].map((day) => (
                  <Typography
                    key={day}
                    sx={{
                      color: "white",
                      fontSize: "12px",
                      fontWeight: "bold",
                      lineHeight: "40px",
                    }}
                  >
                    {day}
                  </Typography>
                ))}

                {[...Array(31)].map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      borderRadius: "100%",
                      backgroundColor: index === 14 ? "#30866D" : "transparent",
                      color: index === 14 ? "white" : "white",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: index === 14 ? "#256d52" : "#525562",
                      },
                    }}
                  >
                    {index + 1}
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} lg={7}>
            <Box
              sx={{
                backgroundColor: "#414350",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <Typography variant="h6" sx={{ color: "white", mb: "16px" }}>
                Voice Notes
              </Typography>
              {[...Array(3)].map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    border: "1px solid #B8BAC7",
                    borderRadius: "8px",
                    height: isMobile ? "auto" : "80px",
                    padding: "16px",
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: "space-between",
                    alignItems: isMobile ? "flex-start" : "center",
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
                          mb: isMobile ? "12px" : "4px",
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
                      flexDirection: isMobile ? "column" : "row",
                      gap: "24px",
                      alignItems: isMobile ? "flex-start" : "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        flexDirection: isMobile ? "row" : "column",
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

                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#30866D",
                        color: "white",
                        fontSize: "12px",
                        px: 2,
                        "&:hover": { backgroundColor: "#256d52" },
                        mt: isMobile ? "12px" : "0",
                      }}
                    >
                      View
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Communication;
