import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import githubLogo from '../../assets/images/github.png';
import stackoverflowLogo from '../../assets/images/stackoverflow.png';
import linkedinLogo from '../../assets/images/linkedin.png';
import instagramLogo from '../../assets/images/instagram.png';
import boyImg from '../../assets/images/boy.png'

function Intro() {
  return (
    <Grid container>
      {/* intro text button and social icons */}
      <Grid item md={6}>
        <Typography variant="h2">
          Hy! I Am
        </Typography>
        <Typography variant="h2" color='#fca61f'>
          Mahadev Mandal
        </Typography>
        <Button variant='outlined'>Hire Me</Button>
        {/* social icons left side */}
        <Box>
          <img src={githubLogo} alt="" />
          <img src={stackoverflowLogo} alt="" />
          <img src={linkedinLogo} alt="" />
          <img src={instagramLogo} alt="" />
        </Box>
      </Grid>
      {/* image right side */}
      <Grid item md={6}>
        <img src={boyImg} alt="" height={300} width="100%" />
      </Grid>
    </Grid>
  )
}

export default Intro