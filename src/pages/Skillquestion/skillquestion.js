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

import { Box, IconButton, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { useNavigate } from "react-router-dom";
import { Path } from "../../constants";

// import { Editor } from "@monaco-editor/react";

const Skillquestion = () => {
  const [progress, setProgress] = useState(10); // Example progress value
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();
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
          <IconButton
            sx={{ color: "white" }}
            onClick={() => navigate(Path.SKILL_TEST)}
          >
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
  );
};
export default Skillquestion;
