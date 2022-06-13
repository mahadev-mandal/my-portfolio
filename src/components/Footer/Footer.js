import React from 'react';
import githubLogo from '../../assets/images/github.png';
import stackoverflowLogo from '../../assets/images/stackoverflow.png';
import linkedinLogo from '../../assets/images/linkedin.png';
import instagramLogo from '../../assets/images/instagram.png';
import { Box } from '@mui/material';
import waveImg from '../../assets/images/wave.png'
import Social from '../Social/Social';

function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <img src={waveImg} alt="" width="100%" />
      <Box
        sx={{
          position:'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Social />
      </Box>
    </Box >
  )
}

export default Footer