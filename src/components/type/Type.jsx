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


const testData = [
  { bgcolor: "#6a1b9a", completed: 10 },
  { bgcolor: "#00695c", completed: 30 },
  { bgcolor: "#ef6c00", completed: 53 },
]

const Type = () => {
  const classes = useStyles()

  return (
    <Grid container wrap='nowrap' spacing={2} direction='row'>
      <Grid item xs={6}>
        <Card className={classes.card}>
          <CardContent>
            <Typography align='left' variant='h5' component='h4'>
              Хирургическая терапия
            </Typography>
            {
              testData.map((item, idx) => (
                <TypeProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
            ))}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.card}>
          type 1
        </Card>
      </Grid>
    </Grid>
  )
}

export default Type
