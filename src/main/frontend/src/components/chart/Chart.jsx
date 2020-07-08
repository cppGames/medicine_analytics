import React, { useState, useEffect } from 'react'
import ChartProgressBar from './ChartProgressBar'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  Grid,
  Divider,
  Typography,
  CardContent,
  Button,
  Slide
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    cursor: 'pointer',
    background: 'transparent',
      boxShadow: '6px 6px 14px 0 rgba(0, 0, 0, 0.2), -8px -8px 18px 0 rgba(255, 255, 255, 0.55)',
    '&:hover': {
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  title: {
    paddingTop: '10px'
  },
  warningCount: {
    color: '#990F02',
    fontWeight: 'bold'
  }
}))


function partition(array, isValid) {
  return array.reduce(([pass, fail], elem) => {
    return isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]];
  }, [[], []]);
}

const addDecimalPlaces = (number) => {
  return number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
}

const Chart = (props) => {
  const classes = useStyles()
  const { types } = props

  const [state, setState] = useState({
    hover: false,
    allTypes: false
  })

  const toggleHover = () => {
    setState({hover: !state.hover})
  }

  const [checked, setChecked] = useState(false)
    useEffect(() => {
      setChecked((prev) => !prev);
    }, [])

  const filterTypes = () => {
    if (state.allTypes) { 
      // return types.sort((a, b) => parseInt(b.probability[2]) - parseInt(a.probability[2]))
      const [pass, fail] = partition(types, (e) => e.count > 1000);
      console.log(pass)
      console.log(fail)
      return (
        pass.sort((a, b) => parseInt(b.good) - parseInt(a.good))
          .concat(fail.sort((a, b) => parseInt(b.good) - parseInt(a.good))))
    } else {
      return (
        types.filter((e) => e.count > 1000).sort((a, b) => parseInt(b.good) - parseInt(a.good)))
    }
  } 

  const wrapperName = (name) => {
    var size = 50
    return (name.length > size) ? name.slice(0, size) + ' ...' : name
  }

  const handleClick = () => {
    setState({allTypes: true})
  }

  return(
    <Grid container spacing={2}>
    {
      filterTypes().map((item, idx) => {
        item.hover = true
        return(
          <Grid item xs={12} key={idx}>
            <Slide direction='up' in={checked} mountOnEnter unmountOnExit>
              <Card className={classes.root} onMouseEnter={null} onMouseLeave={() => {}} >
                <CardContent className={classes.content}>
                  <Grid container direction='row' alignItems='center' spacing={2}>
                    <Grid item xs={4} container direction='row' justify='space-between' style={{height: '80px'}}>
                      <Typography 
                        component='h5'
                        variant='h5'
                        align='left'
                        className={classes.title}>
                        { wrapperName(item.name) }
                      </Typography>
                      <Divider orientation='vertical' flexItem  />
                    </Grid>
                    <Grid item xs={8} >
                      <ChartProgressBar
                        bad={ parseFloat(item.bad) }
                        normal={ parseFloat(item.normal) }
                        good={ parseFloat(item.good) }
                        hover={ item.hover } />
                      <Grid item container direction='row' justify='space-between'>
                        <Typography variant="subtitle1" color="textSecondary">
                          Средняя стоимость лечения {'>'} { addDecimalPlaces(item.price) }
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          Статистика посчитана на основе <span className={item.count < 1000 ? classes.warningCount : null}>{ addDecimalPlaces(item.count) }</span> случаев
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Slide>
          </Grid>
        )
      })
    }
    { 
      !state.allTypes && 
      <Grid item align='center' xs={12}> 
        <Button
          // color='#BFBFBF'
          onClick={handleClick}>
            Перейти ко всем типам
        </Button>
      </Grid>
    }
  </Grid>
  )
}


Chart.propTypes = {
  types: PropTypes.array.isRequired,
}

Chart.defaultProps = {
  types: [],
}

export default Chart
