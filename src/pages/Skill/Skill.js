import React from "react";
import { useMediaQuery } from "@mui/material";

import { Box, Typography, Button } from "@mui/material";
import AccessTime from "@mui/icons-material/AccessTime";
import QuestionAnswer from "@mui/icons-material/QuestionAnswer";
import { useNavigate } from "react-router-dom";
import { Path } from "../../constants";

const Skill = () => {
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
                onClick={() => navigate(Path.SKILLQUESTION)}
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
                onClick={() => navigate(Path.SKILLVIEW)}
              >
                View
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skill;
