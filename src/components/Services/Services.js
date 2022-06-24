import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ServicesCard from "../ServicesCard/ServicesCard";
import emoji1 from "../../assets/images/emoji1.png";

function Services() {
  return (
    <Box sx={{ mt: 10 }}>
      <Typography variant="h3" component="h2">
        <span>My Awesome</span> <br />
        <span style={{ color: "#fca61f" }}>Services</span>
      </Typography>
      <Typography variant="body1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
        voluptatum vel placeat iste labore. Quaerat qui ipsam facilis at sequi
        excepturi rerum corrupti repudiandae, officia quia sit fugiat recusandae
        vero unde deserunt quod.
      </Typography>
      <Grid container spacing={4} sx={{mt:8}} justifyContent="center">
        <Grid item>
          <ServicesCard
            imgPath={emoji1}
            heading="Web Developer"
            content="Html css kjkdjf jksdfjk s jfdkfj skjfsdkfj  jdskfjsk"
          />
        </Grid>
        <Grid item>
          <ServicesCard
            imgPath={emoji1}
            heading="App Developer"
            content="Html css kjkdjf jksdfjk s jfdkfj skjfsdkfj  jdskfjsk"
          />
        </Grid>
        <Grid item>
          <ServicesCard
            imgPath={emoji1}
            heading="UI/UX Design"
            content="Html css kjkdjf jksdfjk s jfdkfj skjfsdkfj  jdskfjsk"
          />
        </Grid>
        <Grid item>
          <ServicesCard
            imgPath={emoji1}
            heading="2D Animations"
            content="Html css kjkdjf jksdfjk s jfdkfj skjfsdkfj  jdskfjsk"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Services;
