import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import './RecentProjects.css';
import kbcqna from '../../assets/images/kbcqna.png'
import byaj from '../../assets/images/byaj.png'
// import play_card from '../../assets/images/play_card.png'

function RecentProjects() {
  return (
    <Box class='portfolio' id="recent_projects">
      <Typography variant="h3" component="h2" textAlign="center" className='section-heading'>
        <span>Recent Projects</span> <br />
        <span style={{ color: "#fca61f" }}>Portfolio</span>
      </Typography>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12} sx={{}}>
          <img src={kbcqna} alt="" />
        </Grid>
        <Grid item md={4} xs={12} sx={{}}>
          <img src={byaj} alt="" />
        </Grid>
        <Grid item md={4} xs={12} sx={{}}>
          <img src={byaj} alt="" />
        </Grid>
        {/* <Grid item md={4} xs={12} sx={{}}>
          <img src={play_card} alt="" />
        </Grid> */}
      </Grid>
    </Box >
  )
}

export default RecentProjects