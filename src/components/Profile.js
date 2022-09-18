import React from 'react';
import './Profile.css';
import Icon from '@mdi/react';
import { mdiLinkedin, mdiGithub, mdiArrowCollapseDown, mdiInstagram } from '@mdi/js';
import ProfilePic from '../assets/profile-pic.jpg';
import MyPDF from '../assets/download-resume.pdf';

const Profile = () => {
  return (
    <div className="profile">
      <div className="header-info">
        <div className="photo-frame">
          <img src={ProfilePic} alt="Profile pic" className="profile-pic" />
        </div>
        <div className="primary-info">
          <h1>German Dojcinovic</h1>
          <h2>Frontend Developer</h2>
          <div className="profile-icons">
            <Icon
              path={mdiLinkedin}
              title="LinkedIn"
              className="linkedin-icon social-icon"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/german-dojcinovic/',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
            />
            <Icon
              path={mdiGithub}
              title="GitHub"
              className="github-icon social-icon"
              onClick={() =>
                window.open('https://github.com/orjive5', '_blank', 'noopener,noreferrer')
              }
            />
            <Icon
              path={mdiInstagram}
              title="Instagram"
              className="instagram-icon social-icon"
              onClick={() =>
                window.open(
                  'https://www.instagram.com/germandojcinovic/',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
            />
            <svg
              viewBox="0 0 24 24"
              className="instagram-icon-gradient social-icon"
              onClick={() =>
                window.open(
                  'https://www.instagram.com/germandojcinovic/',
                  '_blank',
                  'noopener,noreferrer'
                )
              }>
              <defs>
                <radialGradient id="instagramGradient" r="150%" cx="30%" cy="107%">
                  <stop stopColor="#fdf497" offset="0" />
                  <stop stopColor="#fdf497" offset="0.05" />
                  <stop stopColor="#fd5949" offset="0.45" />
                  <stop stopColor="#d6249f" offset="0.6" />
                  <stop stopColor="#285AEB" offset="0.9" />
                </radialGradient>
              </defs>
              <path
                fill="url(#instagramGradient)"
                d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <p>
        Hey! I&apos;m a frontend developer based in Belgrade, Serbia. I enjoy coding things from the
        ground up and seeing my ideas come to life in the browser! Because of my engineering
        background, I&apos;m used to dealing with complex problems, and breaking them down into
        simple, straightforward solutions. I am open to new opportunities or people to share ideas
        with! Please, do not hesitate to contact me!
      </p>
      <a href={MyPDF} download="German Dojcinovic Resume.pdf" className="download-cv">
        <button>
          Download CV
          <Icon
            path={mdiArrowCollapseDown}
            title="Download"
            size="22px"
            className="download-icon"
          />
        </button>
      </a>
    </div>
  );
};

export default Profile;
