import { Box, Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

function RecentProjects() {
  return (
    <Box>
      <Typography variant="h4" textAlign="center">
        Recent Projects
      </Typography>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1655068885001-0fea2b5cc028?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
        </SwiperSlide>
        
      </Swiper>
    </Box>
  )
}

export default RecentProjects