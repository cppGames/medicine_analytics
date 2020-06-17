import React, { useState, useEffect } from 'react'
import {
  Grid,
  Card, 
  CardContent,
  Typography 
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import MainParam from './MainParam'


const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
  },
  background: {
    'background-color': 'red'
  }
}))

const Main = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography align='left' variant='h3' component='h2'>
            Карточка пациента
          </Typography>
          <Typography align='left' variant='subtitle1'>
            Эффективность лечения зависит отследующих параметров
          </Typography>
          <Grid container direction='column'>
            <Grid container item direction='row' spacing={2}> 
              <Grid item xs={6}>
                <Typography align='left' variant='h5'>
                  Признаки #1
                </Typography>
                <MainParam />
                <MainParam />
                <MainParam />
                <MainParam />
              </Grid> 

              {/* #2 */}
              <Grid item xs={6}>
                <Typography align='left' variant='h5'>
                  Признаки #1
                </Typography>
                <MainParam />
                <MainParam />
                <MainParam />
                <MainParam />
              </Grid> 
            </Grid>
          </Grid>
        </CardContent>
    </Card>
  )
}

export default Main
