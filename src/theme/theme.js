import { createTheme } from "@mui/material/styles";
// import { blue } from "@mui/material/colors";

const generateTheme = (mode) => {
  return createTheme({
    palette: {
      mode: mode,
      // Add more color customization here
    },
    typography: {
      fontFamily: "Pacifico, cursive",
      // Add typography customization here
    },
    // Add more theme customization options here
  });
};

export default generateTheme;
