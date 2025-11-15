import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFD1B3", 
    },
    secondary: {
      main: "#6B8E23", 
    },
    background: {
      default: "#F5F5F5", 
      paper: "#FFFFFF", 
    },
    text: {
      primary: "#333333", 
      secondary: "#6B8E23",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif", 
  },
});

export default theme;
