import React from 'react'
import {
  Card,
  Grid,
  Typography,
  CardContent
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import TypeProgressBar from './TypeProgressBar'

const useStyles = makeStyles(theme => ({
  card: {
    cursor: 'pointer',
    '&:hover': {
      // https://codepen.io/sdthornton/pen/wBZdXq
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
    }
  }
}))


const testData = {
  diagnostics: {
    name: 'Диагностика',
    probability: [
      { bgcolor: '#6a1b9a', completed: 10 },
      { bgcolor: '#00695c', completed: 30 },
      { bgcolor: '#ef6c00', completed: 53 }
    ]
  },
  antitumor_therapy: {
    name: 'Противоопухолевая терапия',
    probability: [
      { bgcolor: '#6a1b9a', completed: 22 },
      { bgcolor: '#00695c', completed: 14 },
      { bgcolor: '#ef6c00', completed: 78 }
    ]
  },
  radiation_therapy: {
    name: 'Лучевая терапия',
    probability: [
      { bgcolor: '#6a1b9a', completed: 11 },
      { bgcolor: '#00695c', completed: 63 },
      { bgcolor: '#ef6c00', completed: 29 }
    ]
  }
}

const Type = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={2}>
      {
        Object.entries(testData).map(([key, value]) => {
          return(
            <Grid item xs={6} key={key}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography align='left' variant='h5' component='h4'>
                    { value.name }                  
                  </Typography>
                  {
                    value.probability.map((item, idx) => (
                      <TypeProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                  ))}
                </CardContent>
              </Card>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default Type
