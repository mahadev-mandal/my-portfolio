import { Grid, Link, } from '@mui/material';
import React from 'react';
import './Navbar.css';
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch';

function Navbar() {
  return (
    <div>
      <Grid container justifyContent='space-between'>
        <Grid item>
          <Link className='navLink' underline='none'>Home</Link>
          <Link className='navLink' underline='none'>Services</Link>
          <Link className='navLink' underline='none'>Exprience</Link>
          <Link className='navLink' underline='none'>Projects</Link>
          <Link className='navLink' underline='none'>Testimonial</Link>
          <Link className='navLink' underline='none'>Contact</Link>
        </Grid>
        <Grid item>
          <DarkModeSwitch />
        </Grid>
      </Grid>
    </div>
  )
}

export default Navbar