import { resolve as _resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = _resolve(__filename, '..');
export const entry = './client.js';
export const mode = 'development';
export const output = {
  // eslint-disable-next-line no-undef
  path: _resolve(__dirname, 'build'),
  filename: 'bundle.js',
  publicPath: '/',
};
export const resolve = {
  extensions: ['.js', '.jsx', '.json'],
};
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    },
  ],
};
