import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import BadgeApp from './BadgeApp'
import CircularProgressWithLabel from './ProgressApp'
import ActionAlerts from './AlertApp'
import BasicRating from './Rating'

export default function ButtonApp() {
  return (

     <>
     
          <Stack spacing={2} direction="row">

          <Button variant="text">Click me</Button>
          <Button variant="contained">Click me</Button>
          <Button variant="outlined">Click me</Button>
          
          </Stack>
          <BadgeApp />
          <CircularProgressWithLabel />
          <ActionAlerts />
          <BasicRating />
     
     </>


     )
}
