import { styled, } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import githubLogo from '../../assets/images/github.png';
import stackoverflowLogo from '../../assets/images/stackoverflow.png';
import linkedinLogo from '../../assets/images/linkedin.png';
import instagramLogo from '../../assets/images/instagram.png';

const SocialIcon = styled('img')({
  width: 50,
  padding: 15,
  '&:hover': {
    transform: 'translateY(-5px)',
    transitionDuration: '300ms',
  }
})
function Social() {
  return (
    <Box
      sx={{
        p: 2,
        mt: 8
      }}
    >
      <a href='#'>
        <SocialIcon src={githubLogo} alt="" xs />
      </a>
      <a href='#'>
        <SocialIcon src={stackoverflowLogo} alt="" />
      </a>
      <a href='#'>
        <SocialIcon src={linkedinLogo} alt="" />
      </a>
      <a href='#'>
        <SocialIcon src={instagramLogo} alt="" />
      </a>
    </Box>
  )
}

export default Social