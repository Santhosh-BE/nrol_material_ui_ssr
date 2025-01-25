import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  Link,
  FormControlLabel,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn"; // Icon for LinkedIn
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      minHeight="100vh"
      flexDirection={{ xs: "column", sm: "row" }}
    >
      {/* Left Section */}
      <Box
        flex={1}
        flexBasis={{ xs: "100%", sm: "50%" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={{ xs: 3, sm: 4, lg: 8 }} // Reduced padding for tablet and mobile
        bgcolor="white"
      >
        {/* Logo */}
        <Box
          component="img"
          src={
            "https://res.cloudinary.com/dq0sgsxtz/image/upload/v1737468309/Loginlogo_jbekyz.png"
          }
          alt="Logo"
          sx={{ height: 64, mb: 2 }}
        />
        {/* Title Text */}
        <Typography
          variant="h4"
          sx={(theme) => ({
            mt: 4,
            fontWeight: "bold",
            textAlign: "center",
            color: "text.primary", 
            fontSize: "26px", 
            [theme.breakpoints.down("sm")]: {
              fontSize: "20px", // Smaller font size for tablets
            },
          })}
        >
          Shape your career with confidence
        </Typography>
        {/* Subtext */}
        <Typography
          variant="body1"
          sx={{
            mt: 1,
            textAlign: "center",
            color: "text.grey", 
          }}
        >
          Train with Night Fury to conquer your challenges!
        </Typography>
        {/* Form */}
        <Box
          component="form"
          sx={{
            width: "100%",
            maxWidth: 400,
            mt: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center", 
          }}
        >
          {/* Email Input */}
          <TextField
            fullWidth
            variant="outlined"
            label="Enter your email"
            type="email"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px", // Adds border radius
                "& fieldset": {
                  borderColor: "#BDBDBD", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#30866D", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "text.textprimary", // Green border on focus
                },
              },
              "& .MuiInputLabel-root": {
                color: "#696b78", // Placeholder text color
                "&.Mui-focused": {
                  color: "text.textprimary", // Green label on focus
                },
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#696b78", // Placeholder text normal state color
              },
            }}
          />

          {/* Password Input */}
          <TextField
            fullWidth
            variant="outlined"
            label="Enter your password"
            type="password"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px", // Adds border radius
                "& fieldset": {
                  borderColor: "#BDBDBD", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#30866D", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "text.textprimary", // Green border on focus
                },
              },
              "& .MuiInputLabel-root": {
                color: "#696b78", // Default placeholder text color
                "&.Mui-focused": {
                  color: "text.textprimary", // Green label on focus
                },
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#696b78", // Placeholder text normal state color
              },
            }}
          />

          {/* Keep Me Logged In and Forgot Password */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            mb={2}
          >
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "text.textprimary",
                    "&.Mui-checked": {
                      color: "text.textprimary", 
                    },
                  }}
                />
              }
              label="Keep me logged in"
              sx={{
                color: "text.grey",
              }}
            />
            <Link
              href="#"
              sx={{
                fontSize: 14,
                color: "text.textprimary", 
                textDecoration: "none",
              }}
            >
              Forgot password?
            </Link>
          </Box>

          {/* Login Button */}
          <Button
            variant="contained"
            startIcon={<LinkedInIcon />}
            sx={{
              width: "250px", 
              py: 1.5,
              fontSize: 16,
              textTransform: "none",
              borderRadius: "8px",
              bgcolor: "background.btnprimary", 
              "&:hover": {
                bgcolor: "background.btnprimary", 
              },
            }}
            onClick={() => navigate("/dashboard")}
          >
            Login using LinkedIn
          </Button>
        </Box>
      </Box>

      {/* Right Section */}
      <Box
        flex={1}
        flexBasis={{ xs: "100%", sm: "50%" }}
        display={{ xs: "none", sm: "flex" }} // Hidden for mobile
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundImage:
            "url('https://res.cloudinary.com/dq0sgsxtz/image/upload/v1737466848/Loginbg_rlalt5.png')", 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat", 
          backgroundPosition: "center", 
          bgcolor: "background.bg", 
          height: "100vh", 
        }}
      ></Box>
    </Box>
  );
};

export default Login;
