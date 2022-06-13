import { Box, Grid, TextareaAutosize, TextField, Typography } from '@mui/material'
import React from 'react'
import StyledButton from '../StyledButton/StyledButton'

function Contact() {
  return (
    <Grid container sx={{ mt: 10 }}>
      <Grid item md={6}>
        <Typography variant='h2'>Get in Touch</Typography>
        <Typography variant='h2'>Contact me</Typography>
      </Grid>
      <Grid item md={4}>
        <TextField
          variant='outlined'
          placeholder='Full name'
          sx={{
            width: '100%',
            mb: 5
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
    </Grid>
  )
}

export default Contact