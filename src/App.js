import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { blackTheme, whiteTheme } from './theme';
import './App.css';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Intro from './components/Intro'; // Updated to match the section
import Experience from './components/Experience';
import WhatIDo from './components/WhatIDo';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };
  

  return (
    <ThemeProvider theme={darkMode ? blackTheme : whiteTheme}>
      <div className="App">
        {/* Sticky Navbar */}
        <NavBar handleThemeChange={handleThemeChange} darkMode={darkMode} />
        
        {/* Home Section */}
        <Intro darkMode={darkMode} />

        {/* Skills Section */}
        <WhatIDo darkMode={darkMode}/>
        
        {/* Skills Section */}
        <Skills darkMode={darkMode}/>
        
        {/* Projects Section */}
        <Projects  darkMode={darkMode}/>
        
        {/* Contact Section */}
        <Experience darkMode={darkMode} />
      </div>
    </ThemeProvider>
  );
}

export default App;
