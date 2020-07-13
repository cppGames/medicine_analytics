import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Card,
  Button,
  Typography ,
  CardContent,
} from '@material-ui/core'
import LandingToolbar from './LandingToolbar'

const useStyles = makeStyles(theme => ({
  root: theme.page,
  card: Object.assign(theme.cardMaterial, {
    minWidth: '1280px'
  }),
}))

const Landing = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.root}
    >
      <Card className={classes.card}>
        <CardContent>
          <Grid container direction='column'>
            <Grid item>
              <LandingToolbar />
            </Grid>
            <Typography align='left' variant='h1' component='h1'>
              Landing page
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Landing
