import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Avatar,
  Typography,
  Button,
  Grid,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CloseIcon from '@mui/icons-material/CloseRounded';
import {
  Call,
  CallEnd,
  Chat,
  FiberManualRecord,
  Mic,
  MoreHoriz,
  PresentToAll,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Path } from "../../constants";

const VideoCallPage = () => {
  const navigate = useNavigate();
  const [showOutput, setShowOutput] = useState(false);
  const [presenting, setPresenting] = useState(false);

  const handleRun = () => {
    setShowOutput(true);
  };

  const handleCloseOutput = () => {
    setShowOutput(false);
  };

  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box
      sx={{
        width: "100%",
        height: "97%",
        display: "flex",
        flexDirection: "column",
        margin: "20px 32px 20px 32px",
        overflow: "hidden",
        justifyContent: "space-between",
      }}
    >
      {/* Header */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#414350",
          padding: "0px 8px 8px 0px",
          borderRadius: "8px",
          width: "100%",
          height: "70px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "fit-content",
            p: 0,
          }}
        >
          <Box
            component="img"
            src=" https://res.cloudinary.com/dq0sgsxtz/image/upload/v1737466943/Logo_gwm51j.png "
            alt="Logo"
            sx={{ height: 56 }}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Avatar
              src=" https://res.cloudinary.com/dq0sgsxtz/image/upload/v1737466936/userinag_bn5fwl.svg "
              alt="Profile"
              sx={{ width: 40, height: 40 }}
            />
            <Typography color="white" fontSize="16px">
              Joy Wils
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Main Content */}
     { !presenting&&<Grid container sx={{ flex: 1, marginTop: "12px", overflow: "hidden" }}>
        <Grid
          item
          xs={12}
          sm={9}
          md={8}
          lg={9}
          xl={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            height: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "8px",
              background: "#414350",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 16,
                left: 16,
                backgroundColor: "#202028",
                padding: "6px 12px",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <CircleIcon sx={{ color: "red", fontSize: "10px" }} />
              <Typography color="#fff" fontSize="12px">
                00:00:00
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                backgroundColor: "#202028",
                padding: "6px 12px",
                borderRadius: "16px",
              }}
            >
              <Typography color="#fff" fontSize="12px">
                John Doe
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={4}
          lg={3}
          xl={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            paddingLeft: "16px",
            height: "100%",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#414350",
              borderRadius: "8px",
              padding: "16px",
              boxShadow: 1,
              flex: 1,
            }}
          >
            <Typography fontSize="16px" fontWeight="bold" color="white">
              Your Steps
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "62px",
                marginTop: "20px",
              }}
            >
              {[
                "Basic Details",
                "Skills & Strength",
                "Projects & Hobbies",
                "Coding Skills",
              ].map((step, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <CircleIcon
                    sx={{
                      color: index === 0 ? "#30866D" : "#D3D3D3",
                      fontSize: "16px",
                    }}
                  />
                  <Typography color={index === 0 ? "#30866D" : "#A0A0A0"}>
                    {step}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#414350",
              borderRadius: "8px",
              padding: "16px",
              boxShadow: 1,
              textAlign: "center",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography fontSize="16px" fontWeight="bold" color="white">
              Hey Cool, I am Jame
            </Typography>
            <Box
              sx={{
                width: "100%",
                borderBottom: "2px dashed #A0A0A0",
                margin: "12px 0",
              }}
            />
            <Avatar
              src="https://res.cloudinary.com/dq0sgsxtz/image/upload/v1737466937/jame_ugilru.svg "
              alt="Profile"
              sx={{ width: 100, height: 100, margin: "0 auto" }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#30866D",
                color: "white",
                marginTop: "12px",
                textTransform: "none",
                width: "fit-content",
                borderRadius: "8px",
              }}
            >
              Start Talk with Jame
            </Button>
          </Box>
        </Grid>
      </Grid>}

      {/*prsenting icon cocde  */}
 {presenting&&<Grid
      container
      spacing={2}
      sx={{
        flex: 1,
        marginTop: "1px",
        overflow: "visible",
        display: "flex",
        flexWrap: "nowrap", 
      }}
    >
      {/* Left: Video Section */}
      <Grid
        item
        xs={12}
        sm={isOpen ? 9 : 11}
        md={isOpen ? 8 : 10}
        lg={isOpen ? 9 : 10}
        xl={isOpen ? 9 : 11}
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          height: "100%",
          transition: "width 0.3s ease",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            background: "#414350",
            position: "relative",
            padding: "16px",
          }}
        >
          {/* Top Section - Dropdown and Buttons */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
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
                border: "1px solid #30866D",
                borderRadius: 1,
                fontSize: "0.875rem",
              }}
            >
              <MenuItem value="javascript">JavaScript</MenuItem>
            </Select>

            {/* Buttons Section */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  width: 96,
                  height: 50,
                  fontSize: "0.875rem",
                  backgroundColor: "background.btnprimary",
                }}
              >
                Run
              </Button>
            </Box>
          </Box>

          {/* Code Editor & Output */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "12px" , height:"80%" }}>
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
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
                  {`01\n02\n03\n04\n05\n06\n07\n08\n09\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33\n34\n35\n36`}
                </Typography>
              </Box>

              {/* Output Box */}
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
                    onClick={() => setShowOutput(false)}
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
      </Grid>

      {/* Right: Side Panel */}
      <Grid
        item
        xs={12}
        sm={isOpen ? 3 : 1}
        md={isOpen ? 4 : 2}
        lg={isOpen ? 3 : 2}
        xl={isOpen ? 3 : 1}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          height: "100%",
          transition: "width 0.3s ease",
          minWidth: isOpen ? "280px" : "80px", // Prevents collapsing too much
        }}
      >
        {/* Stepper Box */}
        <Box
  sx={{
    backgroundColor: "#414350",
    borderRadius: "8px",
    padding: isOpen ? "16px" : "8px",
    boxShadow: 1,
    width: "100%",
    transition: "width 0.3s ease",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  }}
>
  {/* Top Section: Title & Toggle Button */}
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "50px" }}>
    {isOpen && (
      <Typography fontSize="16px" fontWeight="bold" color="white">
        Javascript Qs
      </Typography>
    )}

    <Typography
      fontSize="14px"
      color="gray"
      sx={{
        cursor: "pointer",
        textDecoration: "underline",
        whiteSpace: "nowrap",
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? "Close" : "Open"}
    </Typography>
  </Box>

  {/* Questions List */}
  {isOpen && (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "10px", flex: 1 }}>
      {[
        { title: "Problem 1", question: "What is a closure in JavaScript?", highlight: true },
        { title: "Problem 2", question: "Explain event delegation in JavaScript." },
        { title: "Problem 3", question: "What is the difference between `==` and `===` in JavaScript?" },
        { title: "Problem 4", question: "How does the `this` keyword work in JavaScript?" },
        { title: "Problem 5", question: "What are Promises and how do they work?" },
      ].map((item, index) => (
        <Box
          key={index}
          sx={{
            padding: "8px",
            border: "1px solid",
            borderColor: item.highlight ? "#30866D" : "rgba(153, 153, 163, 0.7)",
            borderRadius: "8px",
            backgroundColor: "#414350",
          }}
        >
          <Typography fontSize="14px" fontWeight="bold" color={item.highlight ? "#30866D" : "rgba(255, 255, 255, 0.8)"}>
            {item.title}
          </Typography>
          <Typography fontSize="13px" color="rgba(255, 255, 255, 0.7)">
            {item.question}
          </Typography>
        </Box>
      ))}
    </Box>
  )}

  {/* User Image Section at the Bottom */}
  <Box
    sx={{
      marginTop: "auto", // Pushes to bottom
      width: "100%",
      height: "200px",
      borderRadius: "8px",
      overflow: "hidden",
      backgroundColor: "#1E1F29",
    }}
  >
    <img
      src="https://res.cloudinary.com/dq0sgsxtz/image/upload/v1738990393/Moderator_Screen_ymzkzb.png" // Replace with actual user image URL
      alt="User"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover", // Ensures the image covers the box fully
        borderRadius: "8px",
      }}
    />
  </Box>
</Box>
      </Grid>
    </Grid>}
    {/* clsoe */}
    
      {/* Bottom Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#414350",
          borderRadius: "8px",
          padding: "16px",
          marginTop: "12px",
          gap: "24px",
        }}
      >
        {[Call, Mic, PresentToAll, Chat, MoreHoriz, FiberManualRecord].map(
          (Icon, index) => (
            <Box
              key={index}
              sx={{
                width: 42,
                height: 42,
                backgroundColor: "#202028",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={()=>index===2&&setPresenting(true)}
            >
              <IconButton sx={{ color: "white" }}>
                <Icon />
              </IconButton>
            </Box>
          )
        )}

        {/* End Call Icon */}
        <Box
          sx={{
            width: 42,
            height: 42,
            backgroundColor: "#E0302D",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={()=>navigate(Path.ASSESSMENT)}
        >
          <IconButton sx={{ color: "white" }}>
            <CallEnd />
          </IconButton>
        </Box>
      </Box>
      ;
    </Box>
  );
};

export default VideoCallPage;
