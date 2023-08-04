/* Displays the navigation bar at the top of the site */

import React from 'react';
import logo from './logo.svg';
import './../App.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Home', 'Projects', 'Experience', 'Contact']

// const theme = {
//     typography: {
//         fontFamily: 'JetBrains Mono'
        
//     }
// }

function NavBar() {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    {/* <ThemeProvider theme={theme}> */}
                        {/* <Button variant="outlined"> */}
                            Hello
                        {/* </Button>   */}
                    {/* </ThemeProvider> */}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;