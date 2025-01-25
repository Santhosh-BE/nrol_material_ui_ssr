// src/App.js
import React from "react";
import { ThemeProvider, CssBaseline, GlobalStyles } from "@mui/material";
import Box from "@mui/material/Box";
import Routers from "./src/routes/index"; 
import theme from "./theme"; 
import createEmotionCache from "./createEmotionCache";
import { CacheProvider } from "@emotion/react";

const App = () => {
  const cache = createEmotionCache();

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            "*": {
              margin: 0,
              padding: 0,
              boxSizing: "border-box",
              fontFamily: '"Euclid Circular A", sans-serif !important',
            },
          }}
        />
        <Box>
          <Routers />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
