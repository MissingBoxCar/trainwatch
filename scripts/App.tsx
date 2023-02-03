import { createTheme, CssBaseline } from '@mui/material';
import { grey } from '@mui/material/colors';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';

import Header from './components/header';
import Trains from './components/trains';

export default function App() {
  const theme = createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            backgroundColor: 'transparent',
            backgroundImage: 'none',
          },
          positionStatic: {
            margin: '2em 0',
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          regular: {
            '@media (min-width:750px)': {
              minHeight: '48px',
            },
          },
        },
      },
    },
    palette: {
      mode: 'dark',
      background: {
        paper: grey[800],
        default: grey[900],
      },
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Trains />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
