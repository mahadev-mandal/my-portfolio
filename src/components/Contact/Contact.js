import { Box, Grid, TextareaAutosize, TextField, Typography } from '@mui/material'
import React from 'react'
import StyledButton from '../StyledButton/StyledButton'

function Contact() {
  return (
    <Grid container sx={{ mt: 10 }}>
      <Grid itemxs={12} md={5}>
        <Typography variant='h3'>
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
            mb: 5,

          }}
        /><br />
        <TextField
          variant='outlined'
          placeholder='Email'
          sx={{
            width: '100%',
            mb: 5,
          }}
        /><br />
        <TextareaAutosize
          minRows={4}
          variant='outlined'
          placeholder='Message'
          style={{ width: '100%' }}
        /><br />
        <Box sx={{ textAlign: 'center' }}>
          <StyledButton name="Send" num="" />
        </Box>
      </Grid>
    </Grid >
  )
}

export default Contact