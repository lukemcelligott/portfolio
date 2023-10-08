/* Displays the navigation bar at the top of the site */

import React, { useState } from 'react';
import logo from './logo.svg';
import './../App.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const pages = ['Home', 'Projects', 'Experience', 'Contact']

const theme = createTheme({
    typography: {
        fontFamily: 'JetBrains Mono',
        body1: {
            color: '#EEEEEE',
            fontSize: 22
          },
        
    },
});
    
const header = createTheme({
  typography: {
    body1: {
      color: '#EEEEEE',
      fontSize: 32
    },
    h1: {
      color: theme.palette.secondary.main
    },
  }
});

function NavBar() {
    return (
        <div>
            <AppBar elevation={0} position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <ThemeProvider theme={theme}>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <div className='app-bar-center'>
                                    <span className='app-bar-btn'>                              
                                        <Link to="/home">
                                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                            <Typography variant="body1">
                                                Home
                                            </Typography>
                                        </Button>
                                        </Link>
                                    </span>
                                    <span className='app-bar-btn'>
                                        <Link to="/projects">
                                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                            <Typography variant="body1">
                                                Projects
                                            </Typography>
                                        </Button>
                                        </Link>
                                    </span>
                                    <span className='app-bar-btn'>
                                        <Link to="/experience">
                                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                                <Typography variant="body1">
                                                    Experience
                                                </Typography>
                                            </Button>
                                        </Link>
                                    </span>
                                        <span className='app-bar-btn'>
                                        <Link to="/contact">
                                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                            <Typography variant="body1">
                                                Contact
                                            </Typography>
                                        </Button>
                                        </Link>
                                    </span>
                                </div>
                            </Box>
                        </ThemeProvider>
                    </Toolbar>
                </Container>
            </AppBar>

        </div>
    )
}

export default NavBar;
