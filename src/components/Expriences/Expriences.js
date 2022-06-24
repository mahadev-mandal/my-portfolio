import { Box } from '@mui/material'
import React from 'react'
import CircleWithLabel from '../CircleWithLabel/CircleWithLabel'
import './Expriences.css'

function Expriences() {
  return (
    <Box id="exprience"
      sx={{
        display: 'flex',
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        p:9,
      }}
    >
      <CircleWithLabel label1="Years" label2="Exprience" num={1} />
      <CircleWithLabel label1="Completed" label2="Projects" num={5} />
      <CircleWithLabel label1="Companies" label2="Work" num={1} />
    </Box>
  )
}

export default Expriences