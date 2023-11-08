/* Show welcome information when user visits site */

import React from 'react';
import { useEffect, useState } from 'react';
import './../App.css';
import './styles/HomePage.css';
import NavBar from './NavBar';

function HomePage() {
    useEffect(() => {
        document.title = 'Home | Luke McElligott';
    }, []);

    return (
        <div>
            <NavBar />
            <div className='intro font'>
                <p>Hello, my name is</p>
                <div className='typewriter'>
                    <h2 className='accent'>Luke McElligott</h2>
                </div>
                
                <p className='rows'>cybersecurity student | software developer | techie</p>
            </div>
        </div>
    )
}

export default HomePage;