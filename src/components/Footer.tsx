import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
      <a href="https://github.com/CarlosSilva09" target="_blank" rel="noreferrer"><GitHubIcon/></a>
      <a href="https://www.linkedin.com/in/carlos-eduardo-borba-silva-b726a52b9/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Um portfólio projetado e construído por Carlos Silva com 💜</p>
    </footer>
  );
}

export default Footer;