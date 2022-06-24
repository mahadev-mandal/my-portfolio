import { Grid, Link, } from '@mui/material';
import React from 'react';
import './Navbar.css';
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch';
import StyledButton from '../StyledButton/StyledButton';

function Navbar() {
  return (
    <div>
      <Grid container>
        <Grid item
          display={{ xs: 'none', md: 'block' }}
          sx={{

          }}
        >
          <Link href='#' className='navLink' underline='none'>Home</Link>
          <Link href='#' className='navLink' underline='none'>Services</Link>
          <Link href='#' className='navLink' underline='none'>Exprience</Link>
          <Link href='#' className='navLink' underline='none'>Projects</Link>
          <Link href='#' className='navLink' underline='none'>Testimonial</Link>
        </Grid>
        <Grid item sx={{ ml: { md: 5 } }} >
          <StyledButton name="Contact" num="" />
        </Grid>
        <Grid item style={{ marginLeft: 'auto' }}>
          <DarkModeSwitch />
        </Grid>
      </Grid>
    </div >
  )
}

export default Navbar