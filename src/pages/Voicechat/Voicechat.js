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
import { VoiceChat } from "@mui/icons-material";

const Voicechat = () => {
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

      {/* Content Section */}

      <Box
        sx={{
          backgroundColor: "#414350",
          margin: "20px",
          padding: "24px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          height: "100vh", // Full screen height
        }}
      >
        {/* Header Section with Back Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" color="#FFFFFF">
            Record Your Voice Note
          </Typography>
          <Button
            variant="text"
            onClick={() => console.log("Back button clicked")}
            sx={{
              color: "#FFFFFF",
              backgroundColor: "#000000", // Black background for the back button
            }}
          >
            Back
          </Button>
        </Box>

        {/* Chat Message Section */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "100%", // Centered with a max width
            height: "800px",
            backgroundColor: "#31333F",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            margin: "0 auto", // Centers the box
            padding: "16px",
            position: "relative",
          }}
        >
          {/* Today Badge */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#414350",
              color: "#FFFFFF",
              borderRadius: "6px",
              padding: "4px 12px",
              fontSize: "12px",
              position: "absolute",
              top: "10px",
              marginTop:"16px"
            }}
          >
            Today
          </Button>

          {/* Left Side Voice Message */}
          <Box
            sx={{
              marginTop: "62px",
              paddingLeft: "24px",
              paddingRight: "24px",
              display: "flex",
              justifyContent: "flex-start",
              gap: "8px",
              width: "100%",
            }}
          >
            {/* User Profile Image */}
            <Box
              sx={{
                width: "54px",
                height: "54px",
                borderRadius: "50%",
                overflow: "hidden",
                backgroundColor: "#FFFFFF",
                flexShrink: 0,
              }}
            >
              <img
                src="https://res.cloudinary.com/dq0sgsxtz/image/upload/v1737466936/userinag_bn5fwl.svg"
                alt="User Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>

            {/* Container for Voice Message and Text Box */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column", // Stack elements vertically
                gap: "12px", // Space between elements
                width: "100%",
              }}
            >
              {/* Voice Message Box */}
              <Box
                sx={{
                  backgroundColor: "#414350",
                  color: "#FFFFFF",
                  borderRadius: "27px 27px 0 27px",
                  padding: "12px",
                  maxWidth: "800px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                {/* Play/Pause Button */}
                <Box
                  sx={{
                    width: "34px",
                    height: "34px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 24 24"
                    fill="#414350"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </Box>

                {/* Voice Message Waves */}
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <Box
                    sx={{
                      height: "8px",
                      width: "40px",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "4px",
                    }}
                  />
                  <Box
                    sx={{
                      height: "12px",
                      width: "60px",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "4px",
                    }}
                  />
                  <Box
                    sx={{
                      height: "8px",
                      width: "40px",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "4px",
                    }}
                  />
                </Box>
              </Box>

              {/* Text Box Below Voice Message */}
              <Box
                sx={{
                  padding: "16px",
                  border: "1px solid rgba(184, 186, 199, 0.2)", // Border with 20% opacity
                  borderRadius: "8px",
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  lineHeight: "20px",
                  width: "100%",
                }}
              >
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat{" "}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* right Side Voice Message */}
          <Box
            sx={{
              marginTop: "52px",
              paddingLeft: "24px",
              paddingRight: "24px",
              display: "flex",
              justifyContent: "flex-end", // Align to the right
              gap: "8px",
              width: "100%",
            }}
          >
            {/* Container for Message Box and Text Box */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column", // Stack elements vertically
                gap: "12px", // Space between elements
                width: "100%",
                alignItems:"end"
              }}
            >
              {/* Right Side Message Box */}
              <Box
                sx={{
                  backgroundColor: "#414350",
                  color: "#FFFFFF",
                  borderRadius: "27px 0 27px 27px", // Rounded except the left side
                  padding: "12px 16px", // Inner padding
                  width: "fit-content", // Adjust to content width
                  maxWidth: "100%",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                Your improvement areas
              </Box>

              {/* Full-Width Text Box Below */}
              <Box
                sx={{
                  padding: "16px",
                  border: "1px solid #30866D", // Border with specified color
                  borderRadius: "8px",
                  backgroundColor: "transparent",
                  fontSize: "14px",
                  lineHeight: "20px",
                  width: "100%", // Full width
                }}
              >
                <Typography>
                  <span style={{ color: "#FFFFFF" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </span>{" "}
                  <span style={{ color: "#30866D" }}>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </Typography>
              </Box>
            </Box>

            {/* User Profile Image */}
            <Box
              sx={{
                width: "54px",
                height: "54px",
                borderRadius: "50%",
                overflow: "hidden",
                backgroundColor: "#FFFFFF",
                flexShrink: 0,
              }}
            >
              <img
                src="https://res.cloudinary.com/dq0sgsxtz/image/upload/v1737466937/jame_ugilru.svg "
                alt="User Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>

        {/* Start Talking Button */}
        <Button
          variant="contained"
          onClick={() => console.log("Start Talking Button clicked")}
          sx={{
            width: "300px", // Button width set to 300px
            backgroundColor: "#30866D",
            color: "#FFFFFF",
            padding: "12px",
            borderRadius: "24px",
            fontSize: "14px",
            margin: "0 auto", // Centers the button
            textTransform: "capitalize", // Capitalizes only the first letter
            boxShadow: "4px 4px 20px rgba(48, 134, 109, 0.5)", // Drop shadow with specified properties
            "&:hover": { backgroundColor: "#256d52" },
          }}
        >
          Click Here and Start to Talk
        </Button>
      </Box>
    </Box>
  );
};

export default Voicechat;
