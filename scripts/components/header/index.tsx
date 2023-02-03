import { AppBar, Toolbar, Typography } from '@mui/material';
import Container from '@mui/material/Container/Container';
import * as React from 'react';

export default function Header() {
  return (
    <Container>
      <AppBar position='static' color='transparent'>
        <Toolbar disableGutters>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            TrainWatch
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
