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
          padding: "24px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          margin: "20px",
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
            Width: "100%", // Max width set to 800px
            height: "800px",
            backgroundColor: "#31333F",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#FFFFFF",
            fontSize: "14px",
            textAlign: "center",
            margin: "0 auto", // Centers the box
          }}
        >
          <img
            src={"https://res.cloudinary.com/dq0sgsxtz/image/upload/v1737466935/Mobilelogo_xpqjon.svg"}
            alt="Logo"
            style={{ maxWidth: "100px", margin: "auto" }}
          />{" "}
          {/* Add logo */}
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
