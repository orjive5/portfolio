import React from 'react';
import './Project.css';
import Icon from '@mdi/react';
import { mdiEye, mdiXml, mdiAccountHardHat } from '@mdi/js';

// eslint-disable-next-line react/prop-types
const Project = ({ screenshot, name, description, demo, code, wip }) => {
  return (
    <div className="project">
      <img src={screenshot} alt="Project screenshot" />
      <h1>{name}</h1>
      <p>{description}</p>
      <div className="check-project">
        {demo !== '' && (
          <button onClick={() => window.open(demo, '_blank', 'noopener,noreferrer')}>
            <Icon path={mdiEye} title="Demo icon" className="eye-icon" />
            Demo
          </button>
        )}
        {code !== '' && (
          <button onClick={() => window.open(code, '_blank', 'noopener,noreferrer')}>
            <Icon path={mdiXml} title="Code icon" className="code-icon" />
            Code
          </button>
        )}
        {wip && (
          <div className="work-in-progress">
            <h1>Work in progress</h1>
            <Icon path={mdiAccountHardHat} title="Work in progress icon" className="wip-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
