import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import githubLogo from '../../assets/images/github.png';
import stackoverflowLogo from '../../assets/images/stackoverflow.png';
import linkedinLogo from '../../assets/images/linkedin.png';
import instagramLogo from '../../assets/images/instagram.png'

function Intro() {
  return (
    <Grid container>
      {/* intro text button and social icons */}
      <Grid item>
        <Typography variant="h2">
          Hy! I Am
        </Typography>
        <Typography variant="h2" color='#fca61f'>
          Mahadev Mandal
        </Typography>
        <Button variant='outlined'>Hire Me</Button>
        {/* social icons */}
        <Box>
          <img src={githubLogo} alt="" />
          <img src={stackoverflowLogo} alt="" />
          <img src={linkedinLogo} alt="" />
          <img src={instagramLogo} alt="" />
        </Box>
      </Grid>
      <Grid item>

      </Grid>
    </Grid>
  )
}

export default Intro