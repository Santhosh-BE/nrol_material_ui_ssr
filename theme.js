import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3E83F4",
    },
    success: {
      main: "#4caf50",
      contrastText: "#fff",
    },
    danger: {
      main: "#ab003c",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Arial, sans-serif",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "16px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "1rem",
          borderRadius: "0.5rem",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "hsl(0, 0%, 100%)",
          height: "100%",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "1rem",
          padding: "0.2rem",
          fontWeight: 500,
          textTransform: "none",
        },
        containedPrimary: {
          backgroundColor: "#3E83F4",
          color: "white",
          "&:hover": {
            backgroundColor: "#179fff",
          },
        },
        containedSuccess: {
          backgroundColor: "#4caf50",
          color: "white",
          "&:hover": {
            backgroundColor: "#25D366",
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
          "&:before": {
            display: "none",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          color: grey[900],
        },
      },
    },
    MuiTreeView: {
      styleOverrides: {
        root: {
          fontFamily: "Arial, sans-serif",
        },
      },
    },
    MuiTreeItem: {
      styleOverrides: {
        label: {
          fontFamily: "Arial, sans-serif",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#edf4fe",
          borderColor: "#dadada",
        },
      },
    },
  },
});

export default theme;
