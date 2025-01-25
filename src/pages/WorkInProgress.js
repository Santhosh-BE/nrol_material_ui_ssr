import React from "react";
import {  Typography, Container } from "@mui/material";
import { Construction } from "@mui/icons-material";

const WorkInProgress = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Construction sx={{ fontSize: 80, color: "primary.main", mb: 2 }} />
      <Typography variant="h4" gutterBottom>
        Work In Progress
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        We are building something amazing! Check back soon.
      </Typography>
      {/* <Box sx={{ mt: 3 }}>
        <CircularProgress />
      </Box> */}
    </Container>
  );
};

export default WorkInProgress;
