import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectIntro from './ProjectIntro';
import ProjectDesign from './ProjectDesign';
import ProjectImplementation from './ProjectImplementation';
import ProgressElements from '../main/ProgressElements';
import { projectData } from './ProjectData';

const ProjectDetail = () => {
  const params = useParams();
  let projectObj = {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  switch (params.projectName) {
    case 'awareOfMe':
      projectObj = projectData.find((obj) => obj.projectName === 'awareOfMe');
      break;
    case 'market-buddy':
      projectObj = projectData.find(
        (obj) => obj.projectName === 'Market Buddy'
      );
      break;
    default:
      break;
  }

  return (
    <div className="project">
      <ProgressElements />
      <div className="project-header">
        <div className="project-header__name">{projectObj.projectName}</div>
        <div className="project-header__roles">
          {projectObj.roles} • {projectObj.year}
        </div>
      </div>
      <ProjectIntro projectObj={projectObj} />
      <hr className="project-section-dividers" />
      <ProjectDesign projectObj={projectObj} />
      <hr className="project-section-dividers" />
      {/* <ProjectImplementation projectObj={projectObj} /> */}
    </div>
  );
};

export default ProjectDetail;
