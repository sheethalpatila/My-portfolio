import { createTheme } from '@mui/material/styles';

// Black theme (Dark mode)
export const blackTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff', // White color for primary elements
    },
    secondary: {
      main: '#000000', // Black color for secondary elements
    },
    background: {
      default: '#000000', // Black background
      paper: '#333333', // Dark gray paper background
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#cccccc', // Light gray secondary text
    },
  },
});

// White theme (Light mode)
export const whiteTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000', // Black color for primary elements
    },
    secondary: {
      main: '#ffffff', // White color for secondary elements
    },
    background: {
      default: '#ffffff', // White background
      paper: '#f5f5f5', // Light gray paper background
    },
    text: {
      primary: '#000000', // Black text
      secondary: '#666666', // Dark gray secondary text
    },
  },
});
