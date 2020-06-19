import React, { useState, useEffect } from 'react'
import {
  Grid,
  Card,
  Button,
  CardContent,
  Typography 
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import MainParam from './MainParam'
import { get_data } from '../../util/data'


const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275
  },
  title: {
    paddingBottom: theme.spacing(2)
  }
}))

const Main = () => {
  const classes = useStyles()

  const [prodData, setProdData] = useState([])
  useEffect(() => {
    setProdData(get_data())
  }, [])

  const [multiParam, setMultiParam] = useState({})

  const handleClick = (event) => {
    console.log(multiParam)
  }

  return (
    <Card className={classes.root}>
        <CardContent>
          <Grid container direction='column'>
            <Grid item className={classes.title}>
              <Typography align='left' variant='h3' component='h2'>
                Карточка пациента
              </Typography>
              <Typography align='left' variant='subtitle1'>
                Эффективность лечения зависит отследующих параметров
              </Typography>
            </Grid>
            <Grid item container direction='row' spacing={2}> 
              {
                prodData.map((param, idx) => (
                  <Grid item xs={6} key={idx}>
                    <Typography align='left' variant='h5'>
                      { param.name }
                    </Typography>
                    {
                      param.params.map((item, idy) => (
                        <MainParam key={idy} id={item.id} row={item} callbackSelect={setMultiParam} val={multiParam}/>
                      ))
                    }
                </Grid>
                ))
              }
            </Grid>
            <Grid item align='right'>
              <Button variant='outlined' color='default' onClick={handleClick} >перейти к типам лечения</Button>
            </Grid>
          </Grid>
        </CardContent>
    </Card>
  )
}

export default Main
