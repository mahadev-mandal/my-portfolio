import { Grid, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import boyImg from '../../assets/images/boy.png'
import Social from '../Social/Social';
import StyledButton from '../StyledButton/StyledButton';

function Intro() {
  return (
    <Grid container sx={{ mt: 8,}}>
      {/* intro text button and social icons */}
      <Grid item md={6} >
        <Typography variant="h2">
          Hy! I Am
        </Typography>
        <Typography variant="h2" color='#fca61f'>
          Mahadev Mandal
        </Typography>
        <Box
          sx={{
            mt: 3
          }}
        >
          <StyledButton name="Hire Me" />
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

export default Intro