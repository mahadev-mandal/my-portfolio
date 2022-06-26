import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import StyledButton from '../StyledButton/StyledButton'

function Contact() {

  return (
    <Grid container sx={{ pt: 10 }} id="contact">
      <Grid item xs={12} md={5}>
        <Typography variant='h3' className='section-heading'>
          <span>Get in Touch</span><br />
          <span style={{ color: '#fca61f' }}>Contact me</span>
        </Typography>
      </Grid>
      <Grid item xs={12} md={5} sx={{ mt: { xs: 4, md: 0 } }}>
        <TextField
          variant='outlined'
          placeholder='Full name'
          sx={{
            width: '100%',
            mb: 3,

          }}
        /><br />
        <TextField
          variant='outlined'
          placeholder='Email'
          sx={{
            width: '100%',
            mb: 3,
          }}
        /><br />
        <TextField
          variant='outlined'
          placeholder='Message'
          multiline
          sx={{
            width: '100%',
            mb: 3,
          }}
        />
        <br />
        <Box sx={{ textAlign: 'center' }}>
          <StyledButton name="Send" num="" />
        </Box>
      </Grid>
    </Grid >
  )
}

export default Contact