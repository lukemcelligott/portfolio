/* Show welcome information when user visits site */

import React from 'react';
import logo from './logo.svg';
import './../App.css';
import NavBar from './NavBar';

function HomePage() {
    return (
        <div>
            <NavBar />
            <div className='container'>
                <p className='font'>Hello, my name is</p>
                <h2 className='font'>Luke McElligott</h2>
            </div>
        </div>
    )
}

export default HomePage;