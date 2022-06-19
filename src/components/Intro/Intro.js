import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import boyImg from '../../assets/images/boy.png'
import Social from '../Social/Social';
import StyledButton from '../StyledButton/StyledButton';

function Intro() {
  return (
    <Grid container sx={{ mt: 8, }}>
      {/* intro text button and social icons */}
      <Grid item md={6} >
        <Typography component="h1" variant='h2'>
          <span>Hy! I Am</span> <br />
          <span style={{ color: '#fca61f' }}>Mahadev Mandal</span>
        </Typography>
        <Box
          sx={{
            mt: 3,
          }}
        >
          <StyledButton name="Hire Me" /> &nbsp;&nbsp;&nbsp;&nbsp;
          <StyledButton name="Download CV" />
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