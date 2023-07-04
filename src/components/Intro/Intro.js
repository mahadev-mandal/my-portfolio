import { Grid, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import boyImg from '../../assets/images/boy.png'
import Social from '../Social/Social';
import StyledButton from '../StyledButton/StyledButton';
import resume from '../../assets/pdf/my_resume.pdf'

function Intro() {
  return (
    <Grid container sx={{ mt: 8, }} id="intro">
      {/* intro text button and social icons */}
      <Grid item md={6} >
        <Typography component="h1" variant='h2' className='section-heading'>
          <span>Hy! I Am mahadev</span> <br />
          <span style={{ color: '#fca61f', }}>Mahadev Mandal</span>
        </Typography>
        <Box
          sx={{
            mt: 3,
          }}
        >
          <StyledButton name="Hire Me" /> &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href={resume} download sx={{ textDecoration: 'none' }}>
            <StyledButton name="Download CV" />
          </Link>
        </Box>
        {/* social icons left side */}
        <Social />
      </Grid>
      {/* image right side */}
      <Grid item md={6}>
        <img src={boyImg} alt="" width="100%" />
      </Grid>
    </Grid>
  )
}

export default Intro;