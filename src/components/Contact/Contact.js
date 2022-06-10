import { Grid, TextareaAutosize, TextField, Typography } from '@mui/material'
import React from 'react'

function Contact() {
  return (
    <Grid container>
      <Grid item md={6}>
        <Typography variant='h2'>Get in Touch</Typography>
        <Typography variant='h2'>Contact me</Typography>
      </Grid>
      <Grid item md={6}>
        <TextField variant='outlined' placeholder='Full name' /><br />
        <TextField variant='outlined' placeholder='Email' /><br />
        <TextareaAutosize minRows={4} variant='outlined' placeholder='Message' />
      </Grid>
    </Grid>
  )
}

export default Contact