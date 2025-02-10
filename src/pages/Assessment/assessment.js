import React from "react";
import { useMediaQuery } from "@mui/material";

import { Box, Typography, Button } from "@mui/material";

import AccessTime from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";
import { Path } from "../../constants";

const Assessment = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); // Check if the screen is mobile-sized
  const navigate = useNavigate();
  return (
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
              <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
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
                    JavaScript Coding
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.9)",
                      fontSize: "14px",
                    }}
                  >
                    Your interview with Company starts in 30 minutes.{" "}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.6)",
                      fontSize: "12px",
                      marginTop: "3px",
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
                ></Box>

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
                  onClick={() => navigate(Path.ASSESSMENTCALL)}
                >
                  Start
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
  );
};

export default Assessment;
