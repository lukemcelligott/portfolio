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
//import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
//import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Home', 'Projects', 'Experience', 'Contact']

const theme = createTheme({
    typography: {
        fontFamily: 'JetBrains Mono',
        body1: {
            color: '#EEEEEE'
          },
        
    },
});
    
const header = createTheme({
  typography: {
    body1: {
      color: '#EEEEEE'
    },
    h1: {
      color: theme.palette.secondary.main
    },
  }
});

function NavBar() {
    return (
        <div>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <ThemeProvider theme={theme}>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {/* {pages.map((page) => ( */}
                                {/* <Button
                                    key={page}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    <Typography variant="body1">
                                        {page}
                                    </Typography>
                                </Button> */}
                                {/* ))} */}

                                <Link to="/home">
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    <Typography variant="body1">
                                        Home
                                    </Typography>
                                </Button>
                                </Link>

                                <Link to="/projects">
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    <Typography variant="body1">
                                        Projects
                                    </Typography>
                                </Button>
                                </Link>

                                <Link to="/experience">
                                    <Button
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        <Typography variant="body1">
                                            Experience
                                        </Typography>
                                    </Button>
                                </Link>

                                <Link to="/contact">
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    <Typography variant="body1">
                                        Contact
                                    </Typography>
                                </Button>
                                </Link>

                            </Box>
                        </ThemeProvider>
                    </Toolbar>
                </Container>
            </AppBar>

        </div>
    )
}

export default NavBar;
