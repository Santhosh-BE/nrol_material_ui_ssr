import React, { useState } from "react";
import { Divider, Grid, MenuItem, Select, useMediaQuery } from "@mui/material";

import {
  Box,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NrolModel from "../../Components/NrolModel";
// import { Editor } from "@monaco-editor/react";

const Code = () => {
  const [showOutput, setShowOutput] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleRun = () => {
    setShowOutput(true);
  };

  const handleCloseOutput = () => {
    setShowOutput(false);
  };

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
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
              <MenuItem value="python">Python</MenuItem>
              <MenuItem value="java">Java</MenuItem>
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
                Save
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
              <Button
                variant="contained"
                sx={{
                  width: 96,
                  height: 50,
                  fontSize: "0.875rem",
                  backgroundColor: "background.buttonnormal",
                }}
                onClick={() => alert("Fury AI Clicked")}
              >
                Fury AI
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
            {/* Left Section - Folder */}
            <Box
              sx={{
                width: { xs: "100%", lg: isCollapsed ? "60px" : "20%" },
                p: 2,
                borderRadius: 2,
                backgroundColor: "#414350",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                position: "sticky",
                top: 0,
                alignItems: isCollapsed ? "center" : "flex-start",
                transition: "width 0.3s ease-in-out",
              }}
            >
              {/* Folder Title & Icons */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  color="white"
                  sx={{
                    maxWidth: isCollapsed ? "40px" : "100%",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  Folder
                </Typography>

                {/* Icons (Hidden when Collapsed) */}
                {!isCollapsed && (
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <img
                      src="https://res.cloudinary.com/dq0sgsxtz/image/upload/v1737466933/file_hdmpc1.svg"
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
                      src="https://res.cloudinary.com/dq0sgsxtz/image/upload/v1737466885/folder_dsk5vq.svg"
                      alt="New Folder"
                      style={{ width: 24, height: 24, cursor: "pointer" }}
                      title="Add Folder"
                    />
                  </Box>
                )}
              </Box>

              {/* Toggle Button (Centered at Bottom) */}
              <Box
                sx={{
                  mt: "auto",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <Typography sx={{ fontSize: "14px", color: "gray" }}>
                  {isCollapsed ? "Open" : "Close"}
                </Typography>
              </Box>
            </Box>

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
      <NrolModel
        open={modalOpen}
        setOpen={setModalOpen}
        title={"Code Difference"} // Modal title
        modalSize="xl"
        content={(() => {
          // Media queries for responsiveness
          const isMobile = useMediaQuery("(max-width:600px)");
          const isTablet = useMediaQuery("(max-width:1024px)");

          // Dynamic modal size
          const modalWidth = isMobile ? "90vw" : isTablet ? "85vw" : "1320px";
          const modalHeight = isMobile ? "auto" : isTablet ? "750px" : "860px";

          return (
            <Box
              sx={{
                width: modalWidth,
                height: modalHeight,
                maxWidth: "100vw", // Prevent overflow
                maxHeight: "100vh", // Prevent overflow
                p: isMobile ? 1 : 2, // Adjust padding for mobile
                backgroundColor: "white",
                borderRadius: 2,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden", // No scrollbars
              }}
            >
              {/* Header Section */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: isMobile ? 1 : 2, // Adjust margin for mobile
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "black",
                    fontSize: isMobile ? "1rem" : "1.25rem",
                  }}
                >
                  Code Difference
                </Typography>

                {/* Action Buttons */}
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "black",
                      borderColor: "#30866D",
                      "&:hover": { backgroundColor: "#30866D22" },
                      fontSize: isMobile ? "0.75rem" : "0.875rem", // Adjust button font size
                      padding: isMobile ? "4px 8px" : "6px 16px",
                    }}
                    onClick={() => setModalOpen(false)}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#30866D",
                      color: "white",
                      "&:hover": { backgroundColor: "#256d52" },
                      fontSize: isMobile ? "0.75rem" : "0.875rem", // Adjust button font size
                      padding: isMobile ? "4px 8px" : "6px 16px",
                    }}
                  >
                    Replace and Save code
                  </Button>
                </Box>
              </Box>

              {/* Divider */}
              <Divider
                sx={{ borderColor: "rgba(0, 0, 0, 0.2)", mb: isMobile ? 1 : 2 }}
              />

              {/* Responsive Grid Layout */}
              <Grid container spacing={2} sx={{ height: "100%" }}>
                {/* Left Section - Your Code */}
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    height: isTablet ? "auto" : "100%",
                    display: "flex", // Ensure full height
                  }}
                >
                  <Box
                    sx={{
                      flex: 1, // Allow full width and height
                      backgroundColor: "#414350",
                      borderRadius: 2,
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      boxSizing: "border-box",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "white",
                        mb: 1,
                        fontWeight: "bold",
                        fontSize: isMobile ? "0.9rem" : "1rem",
                      }}
                    >
                      Your Code
                    </Typography>
                    <Typography
                      component="pre"
                      sx={{
                        fontSize: isMobile ? "0.75rem" : "0.875rem",
                        lineHeight: 1.5,
                        color: "rgba(255, 255, 255, 0.7)",
                        fontFamily: "monospace",
                        whiteSpace: "pre-wrap",
                        flex: 1, // Fill available height
                      }}
                    >
                      {`1. console.log("Your Code Example");
2. function yourFunction() {
3.   console.log("Hello, world!");
4. }`}
                    </Typography>
                  </Box>
                </Grid>

                {/* Right Section - Fury AI Code */}
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    height: isTablet ? "auto" : "100%",
                    display: "flex", // Ensure full height
                  }}
                >
                  <Box
                    sx={{
                      flex: 1, // Allow full width and height
                      backgroundColor: "rgba(203, 223, 253, 0.5)",
                      borderRadius: 2,
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      boxSizing: "border-box",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "black",
                        mb: 1,
                        fontWeight: "bold",
                        fontSize: isMobile ? "0.9rem" : "1rem",
                      }}
                    >
                      Fury AI Code
                    </Typography>
                    <Typography
                      component="pre"
                      sx={{
                        fontSize: isMobile ? "0.75rem" : "0.875rem",
                        lineHeight: 1.5,
                        color: "rgba(0, 0, 0, 0.7)",
                        fontFamily: "monospace",
                        whiteSpace: "pre-wrap",
                        flex: 1, // Fill available height
                      }}
                    >
                      {`1. console.log("Fury AI Code Example");
2. function aiFunction() {
3.   console.log("This is AI generated!");
4. }`}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          );
        })()}
        footer={null}
      />
    </>
  );
};
export default Code;
