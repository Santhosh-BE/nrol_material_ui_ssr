import React, { useState } from "react";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  LinearProgress,
  MenuItem,
  Select,
  useMediaQuery,
} from "@mui/material";

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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

// import { Editor } from "@monaco-editor/react";

const Skillquestion = () => {
  const [progress, setProgress] = useState(10); // Example progress value
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    "Speaking loudly",
    "Listening actively",
    "Using complex words",
    "Talking continuously",
    "Ignoring feedback",
  ];

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
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
            {/* Back Button & Progress Bar */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <IconButton sx={{ color: "white" }}>
                <ArrowBackIcon />
              </IconButton>
              <LinearProgress
                variant="determinate"
                value={10} // Change dynamically
                sx={{
                  flex: 1,
                  height: 10,
                  backgroundColor: "#2E2E38",
                  borderRadius: 5,
                  mx: 2,
                }}
              />
              <Typography color="white" fontSize="0.875rem">
                01/10
              </Typography>
            </Box>

            {/* Question Box */}
            <Box
              sx={{
                backgroundColor: "#23232B",
                borderRadius: 2,
                p: { xs: 2, sm: 3 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                textAlign: "center",
              }}
            >
              <img
                src="https://res.cloudinary.com/dq0sgsxtz/image/upload/v1737466937/jame_ugilru.svg"
                alt="Profile"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />{" "}
              <Typography variant="h6" color="white" fontWeight="bold">
                Which of the following is the most important aspect of effective
                communication?
              </Typography>
              {/* Options Section */}
              <Box sx={{ mt: 6 }}>
                {[
                  "Speaking loudly",
                  "Listening actively",
                  "Using complex words",
                  "Talking continuously",
                  "Ignoring feedback",
                ].map((option, index) => (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox sx={{ color: "white" }} />}
                    label={
                      <Typography color="white" fontSize="1rem">
                        {option}
                      </Typography>
                    }
                    sx={{
                      display: "flex", // Ensure it's a row
                      alignItems: "center", // Align checkbox and text vertically
                      gap: 1, // Space between checkbox and text
                      mb: 2, // Margin bottom for spacing
                    }}
                  />
                ))}
              </Box>
              {/* Next Button */}
              <Box sx={{ mt: 10, display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  sx={{
                    width: 300,
                    backgroundColor: "#30866D",
                    color: "white",
                    borderRadius: 20,
                    fontSize: "1rem",
                    py: 1.5,
                  }}
                >
                  Next
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* close content section */}
      </Box>
    </>
  );
};
export default Skillquestion;
