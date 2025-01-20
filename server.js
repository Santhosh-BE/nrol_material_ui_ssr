// server.js
import express from 'express';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import { StaticRouter } from 'react-router-dom/server';
import createEmotionCache from './createEmotionCache';
import App from './App';
import theme from './theme';
import createStore from './src/store'; // Adjust the path according to your structure
import { Provider } from 'react-redux';
import { GlobalStyles } from '@mui/material';

function renderFullPage(html, css, preloadedState) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
		<link rel="icon" href="https://res.cloudinary.com/dxfb6tcxs/image/upload/v1719645897/nRoll/vsho3k1ctwy1tzyzu3a1.svg" />
        <title>nRol Compiler</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="emotion-insertion-point" content="" />
        ${css}
      </head>
      <body>
        <script async src="/build/bundle.js"></script>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
        </script>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
}

function handleRender(req, res) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

  const preloadedState = {}; // Define your initial state here if any
  const store = createStore(preloadedState);

  // Render the component to a string.
  const html = ReactDOMServer.renderToString(
    <CacheProvider value={cache}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <StaticRouter location={req.url}>
            <CssBaseline />
            <GlobalStyles
              styles={{
                '*': {
                  fontFamily: 'Arial, sans-serif !important',
                },
              }}
            />
            <App preloadedState={preloadedState} />
          </StaticRouter>
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );

  // Grab the CSS from emotion
  const emotionChunks = extractCriticalToChunks(html);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);

  // Send the rendered page back to the client.
  res.send(renderFullPage(html, emotionCss, store.getState()));
}

const app = express();

app.use('/build', express.static('build'));

// This is fired every time the server-side receives a request.
app.use(handleRender);

const port = 3001;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
