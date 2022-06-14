import { Box, Typography } from '@mui/material'
import React from 'react'
import StyledButton from '../StyledButton/StyledButton'

function Services() {
  return (
    <Box sx={{ mt: 10 }}>
      <Typography variant='h3' component="h2">
        <span>My Awesome</span> <br />
        <span style={{color:'#fca61f'}}>Services</span>
      </Typography>
      <Typography variant='body1'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil voluptatum vel placeat iste labore. Quaerat qui ipsam facilis at sequi excepturi rerum corrupti repudiandae, officia quia sit fugiat recusandae vero unde deserunt quod.
      </Typography>
      <Box sx={{ mt: 8 }}>
        <StyledButton name="Download CV" />
      </Box>
    </Box>
  )
}

export default Services