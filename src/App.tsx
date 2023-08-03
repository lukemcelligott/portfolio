import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';

function App() {
  const appStyle = {
    backgroundColor: '#232931', // Replace "lightblue" with your desired background color
  };

  return (
    <div className="background" style={appStyle}>
      <HomePage />
    </div>
  );
}

export default App;
