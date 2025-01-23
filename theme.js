// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {

    background: {
      bg: "#202028", 
      searchbg: "#414350", 
      btnprimary: "#30866D", 
      buttonnormal: '#414350',
      cardbg: '#414350',
      placeholder: '#23232B',

    },

    text: {
      primary: "#202028", 
      textprimary: "#30866D", 
      secondary: "#B8B9BE", 
      white:"#ffffff",
      black:"#000000" ,
      grey:"#696b78" ,
      textsecondary: '#B8B9BE',      
      titletext: '#24252B',  
      white60: 'rgba(255, 255, 255, 0.6)', 
      white80: 'rgba(255, 255, 255, 0.8)',     
    },

    sidebar: {
      sidebar: "#333541", 
    },

  },

  typography: {
    fontFamily: '"Euclid Circular A", sans-serif',
  },

});

export default theme;
