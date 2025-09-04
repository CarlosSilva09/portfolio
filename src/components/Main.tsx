import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={require('../assets/images/Eu.jpg')} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/CarlosSilva09" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/carlos-eduardo-borba-silva-b726a52b9/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Carlos Silva</h1>
          <p>Desenvolvedor Full-Stack</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/CarlosSilva09" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/carlos-eduardo-borba-silva-b726a52b9/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
