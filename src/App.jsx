import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/main/Landing';
import Navigation from './components/main/Navigation';
import ProjectDetail from './components/projects/ProjectDetail';
import NotFoundPage from './components/main/NotFoundPage';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Landing />} />
        <Route path="/projects/:projectName" element={<ProjectDetail />} />
      </Routes>
    </>
  );
};

export default App;
