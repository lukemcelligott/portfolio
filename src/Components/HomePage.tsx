/* Show welcome information when user visits site */

import React from 'react';
import logo from './logo.svg';
import './../App.css';
import NavBar from './NavBar';

function HomePage() {
    return (
        <div>
            <NavBar />
            <p className='font'>hello</p>
        </div>
    )
}

export default HomePage;