import { Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Path } from '../../constants'

const Interview = () => {
    const navigate = useNavigate()
  return (
    <div> <Typography variant="h4" gutterBottom color={"white"}>
   Interview
  </Typography>
  <Button onClick={()=>navigate(Path.DASHBOARD) }>Back</Button></div>
  )
}

export default Interview