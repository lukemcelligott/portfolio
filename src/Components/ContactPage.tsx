/* Show contact information */

import React, { useEffect } from 'react';
import logo from './logo.svg';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

import './../App.css';
import './styles/HomePage.css';
import './styles/ContactPage.css';
import NavBar from './NavBar';

function ContactPage() {
    const email = 'mailto:lpm1006@sru.edu';
    const linkedin = 'https://www.linkedin.com/in/luke-mcelligott/';
    const github = 'https://github.com/lukemcelligott';

    useEffect(() => {
        document.title = 'Contact | Luke McElligott';
    }, []);

    return (
        <div>
            <NavBar />
            <div className='intro font'>
                <h5 className='header'>I can be reached using the links below:</h5>
                <Stack direction="row" spacing={3} alignItems="flex-end">
                    <Link to={email} target="_blank" rel="noopener noreferrer">
                        <MailOutlineIcon className='icons' sx={{ fontSize: 40 }}/>
                    </Link>
                    <Link to={linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className='icons' sx={{ fontSize: 40 }}/>
                    </Link>
                    <Link to={github} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon className='icons' sx={{ fontSize: 40 }}/>
                    </Link>
                </Stack>
            </div>
        </div>
    )
}

export default ContactPage;