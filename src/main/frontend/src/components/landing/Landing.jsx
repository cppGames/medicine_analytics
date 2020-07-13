import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import {
  Typography
} from '@material-ui/core'

const Landing = () => {
  const theme = useTheme();

  return (
    <div style={ theme.page }>
      <Typography align='left' variant='h1' component='h1'>
        Landing page
      </Typography>
    </div>
  )
}

export default Landing
