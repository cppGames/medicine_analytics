import React, { useState, useEffect } from 'react'
import {
  Grid,
  Card,
  Button,
  CardContent,
  Typography,
  CircularProgress 
} from '@material-ui/core'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import MainParam from './MainParam'
import { get_data } from '../../util/data'


const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    background: 'transparent',
    boxShadow: '6px 6px 14px 0 rgba(0, 0, 0, 0.2), -8px -8px 18px 0 rgba(255, 255, 255, 0.55)',
  },
  title: {
    paddingBottom: theme.spacing(2)
  },
  wrapper: {
    position: 'relative',
  },
  buttonProgress: {
    color: theme.colors.grey,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}))

const Main = (props) => {
  const classes = useStyles()

  const [prodData, setProdData] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:8080/v1/api/patient-card/filter-dashboard')
      .then(response => {
        console.log(`get dashboard filtrs`)
        console.log(`${response.data}`)
        setProdData(response.data)
      })
      .catch(error => { 
        console.log(`failed to get error dashboard filters: ${error}`)
      })
  }, [])

  const [filters, setFilters] = useState({})
  const [loading, setLoading] = useState(false)
  const timer = React.useRef();

  const handleClick = (event) => {
    console.log(filters)
    setLoading(true)
    timer.current = setTimeout(() => {
      setLoading(false)
      props.setFilters(filters)
    }, 1500)
  }

  return (
    <Card className={classes.root}>
        <CardContent>
          <Grid container direction='column'>
            <Grid item className={classes.title}>
              <Typography align='left' variant='h3' component='h3'>
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
                        <MainParam key={idy} id={item.id} row={item} callbackSelect={setFilters} val={filters}/>
                      ))
                    }
                </Grid>
                ))
              }
            </Grid>
            <Grid item align='right'>
              
                <Button 
                  variant='outlined'
                  color='default'
                  disabled={loading}
                  onClick={handleClick}
                  className={classes.wrapper}
                >
                  Перейти к типам лечения
                  { loading && <CircularProgress size={24} className={classes.buttonProgress} /> }
                </Button>
                
              
            </Grid>
          </Grid>
        </CardContent>
    </Card>
  )
}

Main.propTypes = {
  setFilters: PropTypes.func.isRequired
}

Main.defaultProps = {
  setFilters: () => ({})
}

export default Main
