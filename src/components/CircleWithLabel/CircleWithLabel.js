import { Box, Typography } from '@mui/material'
import React from 'react'
const styles = {

}

function CircleWithLabel({ label1, label2, num }) {
  return (
    <Box
      sx={{
        m: { md: 8, xs: 3 },
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div className="circle">{num}+</div>
      <Typography variant='body2'>{label1}</Typography>
      <Typography variant='body2'>{label2}</Typography>
    </Box>
  )
}

export default CircleWithLabel