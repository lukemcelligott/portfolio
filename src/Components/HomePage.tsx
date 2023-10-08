/* Show welcome information when user visits site */

import React from 'react';
import { useEffect, useState } from 'react';
import './../App.css';
import './styles/HomePage.css'
import NavBar from './NavBar';

function HomePage() {
    const [typedName, setTypedName] = useState<string>('');
    const name = 'Luke McElligott';

    useEffect(() => {
        if (typedName === '') {
          const type = async () => {
            for (let i = 0; i < name.length; i++) {
              setTypedName((prevTypedName) => prevTypedName + name[i]);
              await new Promise((resolve) => setTimeout(resolve, 100)); // Adjust typing speed here
            }
          };
    
          type();
        }
    }, [typedName, name]);

    return (
        <div>
            <NavBar />
            <div className='intro font'>
                <p>Hello, my name is</p>
                <h2>{typedName}</h2>
                <p>cybersecurity student, developer hobbyist, tech enjoyer</p>
            </div>
        </div>
    )
}

export default HomePage;