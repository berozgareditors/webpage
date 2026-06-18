import { createTheme } from "@mui/material/styles";

// Keep these in sync with tailwind.config.js
const RED = "#E63721";
const RED_DARK = "#C42712";
const INK = "#0A0A0A";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: RED, dark: RED_DARK, contrastText: "#FFFFFF" },
    background: { default: INK, paper: "#161616" },
    text: { primary: "#FFFFFF", secondary: "rgba(255,255,255,0.72)" },
  },
  typography: {
    fontFamily: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"].join(","),
  },
  shape: { borderRadius: 14 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 9999,
          paddingInline: "1.6rem",
          paddingBlock: "0.6rem",
        },
        containedPrimary: {
          boxShadow: "0 10px 30px -10px rgba(230,55,33,0.7)",
          "&:hover": { backgroundColor: RED_DARK },
        },
        sizeLarge: {
          fontSize: "1rem",
          paddingInline: "2rem",
          paddingBlock: "0.8rem",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: { color: "#FFFFFF" },
      },
    },
  },
});

export default theme;
