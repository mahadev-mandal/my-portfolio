import { createTheme } from "@mui/material";

// Light theme for this web App
export const lightTheme = createTheme({
  typography: {
    fontFamily: [
      'Gumela'
    ].join(','),
  },
  palette: {
    mode: 'light',
  },
})
lightTheme.typography.h3 = {
  fontSize: '40px',
  [lightTheme.breakpoints.up('md')]: {
    fontSize: '50px',
  },
};
lightTheme.typography.h2 = {
  fontSize: '50px',
  [lightTheme.breakpoints.up('md')]: {
    fontSize: '60px',
  },
};

// dark theme for this web App
export const darkTheme = createTheme({
  typography: {
    fontFamily: [
      'Gumela'
    ].join(','),
  },
  palette: {
    mode: 'dark',
  },
})
darkTheme.typography.h3 = {
  fontSize: '40px',
  [darkTheme.breakpoints.up('md')]: {
    fontSize: '50px',
  },
};
darkTheme.typography.h2 = {
  fontSize: '50px',
  [darkTheme.breakpoints.up('md')]: {
    fontSize: '60px',
  },
};
