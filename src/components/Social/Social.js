import { styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import githubLogo from "../../assets/images/github.png";
import stackoverflowLogo from "../../assets/images/stackoverflow.png";
import linkedinLogo from "../../assets/images/linkedin.png";
import instagramLogo from "../../assets/images/instagram.png";

const SocialIcon = styled("img")({
  width: 70,
  padding: 15,
  "&:hover": {
    transform: "translateY(-5px)",
    transitionDuration: "300ms",
  },
});
function Social() {
  return (
    <Box
      sx={{
        p: 2,
        mt: 8,
        mb: 5,
      }}
    >
      <a href="https://github.com/mahadev-mandal" target="_blanck">
        <SocialIcon src={githubLogo} alt="" xs />
      </a>
      <a href="https://stackoverflow.com/users/14272611/mahadev-mandal" target="_blanck">
        <SocialIcon src={stackoverflowLogo} alt="" />
      </a>
      <a href="https://linkedin.com/in/Mahadev-mandal-7314a5209" target="_blanck">
        <SocialIcon src={linkedinLogo} alt="" />
      </a>
      <a href="https://www.instagram.com/" target="_blanck">
        <SocialIcon src={instagramLogo} alt="" />
      </a>
    </Box>
  );
}

export default Social;
