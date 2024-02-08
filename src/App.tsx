import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import HomePage from './Components/HomePage';
import ProjectsPage from './Components/ProjectsPage';
import ExperiencePage from './Components/ExperiencePage';
import ContactPage from './Components/ContactPage';

import { Analytics } from '@vercel/analytics/react';

function App() {

  return (

      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="contact" element={<ContactPage />} />
          
          <Route path='/' element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Analytics />
      </BrowserRouter>

  );
}

export default App;
