import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'


function CircleWithLabel({ label1, label2, num }) {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        m: { md: 8, xs: 3, },
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Box className="circle"
        sx={{
          background: theme.palette.mode === 'dark' ? '#212121' : 'white'
        }}
      >{num}+
      </Box>
      <Typography variant='body2'>{label1}</Typography>
      <Typography variant='body2'>{label2}</Typography>
    </Box>
  )
}

export default CircleWithLabel