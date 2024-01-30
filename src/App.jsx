import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Work from './components/main/Work';
import Navigation from './components/main/Navigation';
import ProjectDetail from './components/projects/ProjectDetail';
import NotFoundPage from './components/main/NotFoundPage';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Work />} />
        <Route path="/projects/:projectName" element={<ProjectDetail />} />
      </Routes>
    </>
  );
};

export default App;
