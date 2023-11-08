/* Displays the navigation bar at the top of the site */

import React, { useState } from 'react';
import logo from './logo.svg';
import './../App.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

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
        color: '#EEEEEE',
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

function NavBar() {
    return (
        <div>
            <AppBar elevation={0} position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <ThemeProvider theme={theme}>
                            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
                                <div className='app-bar-center' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '80%' }}>
                                    {/* Home Page */}
                                    <span className='app-bar-btn'>                              
                                        <Link to="/home" className='button'>
                                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                                <Typography variant="body1">
                                                    Home
                                                </Typography>
                                            </Button>
                                        </Link>
                                    </span>
                                    {/* Projects Page */}
                                    <span className='app-bar-btn'>
                                        <Link to="/projects" className='button'>
                                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                                <Typography variant="body1">
                                                    Projects
                                                </Typography>
                                            </Button>
                                        </Link>
                                    </span>
                                    {/* Experience Page */}    
                                    <span className='app-bar-btn'>
                                        <Link to="/experience" className='button'>
                                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                                <Typography variant="body1">
                                                    Experience
                                                </Typography>
                                            </Button>
                                        </Link>
                                    </span> 
                                    {/* Contact Page */}    
                                    <span className='app-bar-btn'>
                                        <Link to="/contact" className='button'>
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
