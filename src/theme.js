import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#141414",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
  typography: {
    fontFamily: "'Gotham SSm A', 'Gotham SSm B', -apple-system, BlinkMacSystemFont, sans-serif",
    h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
      letterSpacing: "-0.02em",
      color: "#ffffff",
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 500,
      letterSpacing: "-0.01em",
      color: "#ffffff",
    },
    h6: {
      fontSize: "1.125rem",
      fontWeight: 400,
      letterSpacing: "-0.01em",
      lineHeight: 1.5,
      color: "#ffffff",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      color: "#ffffff",
      letterSpacing: "0.01em",
    },
    body1: {
      fontSize: "0.9375rem",
      lineHeight: 1.7,
      color: "rgba(255, 255, 255, 0.85)",
      letterSpacing: "0.01em",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: '#141414',
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: '8px 0',
          },
          '&:hover': {
            backgroundColor: '#1a1a1a',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: '0 24px',
          '&.Mui-expanded': {
            minHeight: 64,
          },
        },
        content: {
          margin: '16px 0',
          '&.Mui-expanded': {
            margin: '16px 0',
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '0 24px 24px',
          backgroundColor: '#141414',
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;

