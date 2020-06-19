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

  const [rowData, setRowdata] = useState({})
  useEffect(() => {
    setRowdata(get_data())
  }, []);

  const [param1, setParam1] = useState('')
  const [param2, setParam2] = useState('')
  const [param3, setParam3] = useState('')

  const handleClick = (event) => {
    alert(`send params to backend  param1: ${param1}, param2: ${param2}, param3: ${param3}` )
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
              <Grid item xs={6}>
                <Typography align='left' variant='h5'>
                  Признаки #1
                </Typography>
                <MainParam label={'MyName'} items={rowData.param1} callbackSelect={setParam1} value={param1}/>
                <MainParam label={'MyName 2'} items={rowData.param2} callbackSelect={setParam2} value={param2}/>
              </Grid> 
              <Grid item xs={6}>
                <Typography align='left' variant='h5'>
                  Признаки #1
                </Typography>
                <MainParam label={'MyName 3'} items={rowData.param3} callbackSelect={setParam3} value={param3}/>
              </Grid> 
            </Grid>
            <Grid item align='right'>
              <Button variant='outlined' color='secondary' onClick={handleClick} >перейти к типам лечения</Button>
            </Grid>
          </Grid>
        </CardContent>
    </Card>
  )
}

export default Main
