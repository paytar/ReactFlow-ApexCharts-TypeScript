import { createTheme } from "@mui/material/styles";

// Yeni renk paleti
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFD1B3", // Şeftali Tüyü
    },
    secondary: {
      main: "#6B8E23", // Zeytin Yeşili
    },
    background: {
      default: "#F5F5F5", // Açık Gri
      paper: "#FFFFFF", // Beyaz
    },
    text: {
      primary: "#333333", // Koyu Gri
      secondary: "#6B8E23",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif", // Daha modern ve okunaklı yazı tipi
  },
});

export default theme;
