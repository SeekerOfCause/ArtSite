'use client'
import { ThemeOptions, createTheme } from '@mui/material/styles';
import '@fontsource/dancing-script/400.css';
import '@fontsource/dancing-script/500.css';
import '@fontsource/dancing-script/600.css';
import '@fontsource/dancing-script/700.css';
import '@fontsource/satisfy/400.css';


export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#F8EDE3',
    },
    secondary: {
      main: '#CFC3B1',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontSize: 16,
    body1: {
      fontFamily: 'Satisfy',
    },
    button: {
      fontFamily: 'Dancing Script',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      
    },
  },
};

export const theme = createTheme(themeOptions);