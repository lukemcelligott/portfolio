/* Displays the navigation bar at the top of the site */

import React, { useState } from 'react';
import logo from './logo.svg';
import './../App.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import HeaderButton from './Header';

const theme = createTheme({
    typography: {
      fontFamily: 'JetBrains Mono',
      h1: {
        fontSize: '3rem',
      },
      h2: {
        fontSize: '2.5rem',
      },
      body1: {
        fontSize: '1.5rem',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

function NavBar(){
    return (
        <div>
            <AppBar elevation={0} position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <ThemeProvider theme={theme}>
                            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', marginLeft: '10%', marginRight: '10%' }}>
                                <HeaderButton to="/home">Home</HeaderButton>
                                <HeaderButton to="/projects">Projects</HeaderButton>
                                <HeaderButton to="/experience">Experience</HeaderButton>
                                <HeaderButton to="/contact">Contact</HeaderButton>
                            </Box>
                        </ThemeProvider>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default NavBar;
