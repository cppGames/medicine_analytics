import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  page:  theme.page,
}))

const Landing = () => {
  const classes = useStyles()

  return (
    <div className={ classes.page }>
      <Typography align='left' variant='h1' component='h1'>
        Landing page
      </Typography>
    </div>
  )
}

export default Landing
