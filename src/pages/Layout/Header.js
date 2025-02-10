import { AppBar, Box, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  return (
    <>
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
  </>
  )
}

export default Header