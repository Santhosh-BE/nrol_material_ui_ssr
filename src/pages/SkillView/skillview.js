import React, { useState } from "react";
import { Divider, Grid, MenuItem, Select, useMediaQuery } from "@mui/material";

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
import CloseIcon from "@mui/icons-material/Close";
// import { Editor } from "@monaco-editor/react";

const Skillview = () => {
  const [showOutput, setShowOutput] = useState(false);

  const handleRun = () => {
    setShowOutput(true);
  };

  const handleCloseOutput = () => {
    setShowOutput(false);
  };

  return (
    <>
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
                    width: "auto",
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
            {/* Question Info Section */}
            <Box
              sx={{
                backgroundColor: "#414350",
                p: "16px 16px",
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {/* Top Row - Title and Navigation */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ color: "white", fontSize: "1rem", fontWeight: "bold" }}
                >
                  JavaScript Questions - 01 / 05
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <Typography
                    sx={{
                      color: "#A2A2AE",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    Previous
                  </Typography>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ borderColor: "white", height: 20 }}
                  />
                  <Typography
                    sx={{
                      color: "#30866D",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    Next
                  </Typography>
                </Box>
              </Box>

              {/* Bottom Row - Problem Statement */}
              <Typography sx={{ color: "white", fontSize: "0.875rem" }}>
                <strong>Problem 1:</strong> Write a JavaScript function to
                reverse a string.
              </Typography>
            </Box>

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
                  maxWidth: 150,
                  height: 50,
                  p: 1,
                  backgroundColor: "#141319",
                  color: "white",
                  border: "1px solid",
                  borderColor: "#30866D",
                  borderRadius: 1,
                  fontSize: "0.875rem",
                }}
              >
                <MenuItem value="javascript">JavaScript</MenuItem>
              </Select>

              {/* Buttons Section */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="outlined"
                  sx={{
                    width: 96,
                    height: 50,
                    fontSize: "0.875rem",
                    color: "white",
                    borderColor: "#30866D",
                  }}
                >
                  Submit
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    width: 96,
                    height: 50,
                    fontSize: "0.875rem",
                    backgroundColor: "background.btnprimary",
                  }}
                  onClick={handleRun}
                >
                  Run
                </Button>
              </Box>
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
              {/* Right Section - Code Editor and Output Side-by-Side */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: { xs: "column", lg: "row" }, // Vertical on small screens
                  gap: 2,
                }}
              >
                {/* Code Editor */}
                <Box
                  sx={{
                    flex: 2,
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

                {/* Output Box (Appears to the Right) */}
                {showOutput && (
                  <Box
                    sx={{
                      flex: 1,
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
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        color: "white",
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                    <Typography
                      component="pre"
                      color="white"
                      variant="body2"
                      sx={{
                        backgroundColor: "#1e1e1e",
                        borderRadius: 2,
                        p: 2,
                        overflowX: "auto",
                        fontFamily: "monospace",
                        fontSize: "0.875rem",
                      }}
                    >
                      {`Console Output:
1. Process started...
2. Sum is 15
3. Condition met, executing...
4. Process completed!`}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
        {/* close content section */}
      </Box>
    </>
  );
};
export default Skillview;
