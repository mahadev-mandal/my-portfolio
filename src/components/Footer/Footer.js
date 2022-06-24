import React from "react";
import { Box } from "@mui/material";
import waveImg from "../../assets/images/wave.png";
import Social from "../Social/Social";

function Footer() {
  return (
    <Box id="footer"
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <img src={waveImg} alt="" width="100%" />
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Social />
      </Box>
    </Box>
  );
}

export default Footer;
