import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectQuestions from './components/ProjectQuestions';
import ProjectTitleBox from './components/ProjectTitleBox';
function App() {
 

  const handleProjectSubmit = () => {
    // Handle project submission logic here
    console.log('Project submitted:', {ProjectQuestions});
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProjectTitleBox /> 
      <ProjectQuestions
      />
    </div>
  );
}

export default App;
