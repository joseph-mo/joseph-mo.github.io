import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Work from './components/main/Work';
import About from './components/main/About';
import Navigation from './components/main/Navigation';
import ProjectDetail from './components/projects/ProjectDetail';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="" element={<Work />} />
        <Route path="/projects" element={<Work />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/:projectName" element={<ProjectDetail />} />
        {/* Determines routing if path not found         
        <Route path="*" /> */}
      </Routes>
    </>
  );
};

export default App;
