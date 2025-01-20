// src/App.js
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Routers from './src/routes/index';
import { Provider } from 'react-redux';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './createEmotionCache';
import createStore from './src/store';
import theme from './theme';
import { CssBaseline, GlobalStyles } from '@mui/material';
const App = ({ preloadedState = {} }) => {
  const cache = createEmotionCache();
  const [mode] = React.useState('light');
  const [showCustomTheme] = React.useState(true);
  const defaultTheme = createTheme({ palette: { mode } });

  const store = createStore(preloadedState);

  return (
    <Provider store={store}>
      <CacheProvider value={cache}>
        <ThemeProvider theme={showCustomTheme ? theme : defaultTheme}>
          <CssBaseline />
          <GlobalStyles
            styles={{
              '*': {
                fontFamily: 'Arial, sans-serif !important',
              },
            }}
          />
          <Box>
            <Routers />
          </Box>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
};

export default App;
