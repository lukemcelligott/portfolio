/* Show welcome information when user visits site */

import React from 'react';
import { useEffect, useState } from 'react';
import './../App.css';
import './styles/HomePage.css';
import NavBar from './NavBar';

function HomePage() {
    const [typedName, setTypedName] = useState<string>('');
    const name = 'Luke McElligott';

    useEffect(() => {
      let i = 0;

      const type = async () => {
          while (i < name.length) {
              setTypedName((prevTypedName) => prevTypedName + name[i]);
              i++;
              await new Promise((resolve) => setTimeout(resolve, 100)); // Adjust typing speed here
          }
      };

      if (typedName === '') {
          type();
      }
    }, [typedName]);

    return (
        <div>
            <NavBar />
            <div className='intro font'>
                <p>Hello, my name is</p>
                <div className='typewriter'>
                    <h2 className='accent'>Luke McElligott</h2>
                </div>
                
                <p>cybersecurity student, developer hobbyist, tech enjoyer</p>
            </div>
        </div>
    )
}

export default HomePage;