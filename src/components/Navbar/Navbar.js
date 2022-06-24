import { Grid, } from '@mui/material';
import React from 'react';
import './Navbar.css';
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch';
import StyledButton from '../StyledButton/StyledButton';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <div id="navbar">
      <Grid container>
        <Grid item
          display={{ xs: 'none', md: 'block' }}
          sx={{

          }}
        >
          <Link to="intro" spy={true} smooth={true} className="navLink">Home</Link>
          <Link to="services" spy={true} smooth={true} className="navLink">Services</Link>
          <Link to="exprience" spy={true} smooth={true} className="navLink">Exprience</Link>
          <Link to="recent_projects" spy={true} smooth={true} className="navLink">Projects</Link>
          <Link href='#' className='navLink' underline='none'>Testimonial</Link>
        </Grid>
        <Grid item sx={{ ml: { md: 5 } }} >
          <Link to="contact" spy={true} smooth={true}>
            <StyledButton name="Contact" num="" />
          </Link>
        </Grid>
        <Grid item style={{ marginLeft: 'auto' }}>
          <DarkModeSwitch />
        </Grid>
      </Grid>
    </div >
  )
}

export default Navbar