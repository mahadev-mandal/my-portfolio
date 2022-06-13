import { Button } from '@mui/material'
import React from 'react'

function StyledButton({name}) {
  return (
    <Button variant='outlined' sx={{m:2}}>
      {name}
    </Button>
  )
}

export default StyledButton