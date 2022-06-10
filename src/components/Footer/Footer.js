import React from 'react';
import githubLogo from '../../assets/images/github.png';
import stackoverflowLogo from '../../assets/images/stackoverflow.png';
import linkedinLogo from '../../assets/images/linkedin.png';
import instagramLogo from '../../assets/images/instagram.png';

function Footer() {
  return (
    <div>
      <img src={githubLogo} alt="" />
      <img src={stackoverflowLogo} alt="" />
      <img src={linkedinLogo} alt="" />
      <img src={instagramLogo} alt="" />
    </div>
  )
}

export default Footer