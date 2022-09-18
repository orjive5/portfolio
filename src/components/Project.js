import React from 'react';
import './Project.css';
import Icon from '@mdi/react';
import { mdiEye, mdiXml } from '@mdi/js';

// eslint-disable-next-line react/prop-types
const Project = ({ screenshot, name, description, demo, code }) => {
  return (
    <div className="project">
      <img src={screenshot} alt="Project screenshot" />
      <h1>{name}</h1>
      <p>{description}</p>
      <div className="check-project">
        <button onClick={() => window.open(demo, '_blank', 'noopener,noreferrer')}>
          <Icon path={mdiEye} title="Demo icon" className="eye-icon" />
          Demo
        </button>
        <button onClick={() => window.open(code, '_blank', 'noopener,noreferrer')}>
          <Icon path={mdiXml} title="Code icon" className="code-icon" />
          Code
        </button>
      </div>
    </div>
  );
};

export default Project;
