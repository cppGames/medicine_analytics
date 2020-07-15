import React from 'react'
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Slide
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import LoadingBar from '../common/LoadingBar'
import SubmitButton from '../common/SubmitButton'
import DashboardFilterParam from './DashboardFilterParam'


const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    background: 'transparent',
    boxShadow: '6px 6px 14px 0 rgba(0, 0, 0, 0.2), -8px -8px 18px 0 rgba(255, 255, 255, 0.55)',
  },
  title: {
    padding: theme.spacing(1),
    color: 'white'
  },
  buttonProgress: {
    color: theme.colors.grey,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  media: {
    height: 72,
    background: 'linear-gradient(25deg, rgba(78,191,209,1) 0%, rgba(0,136,157,1) 75%, rgba(78,191,209,1) 100%)'
  },
}))

const DashboardFilter = (props) => {
  const classes = useStyles()
  const {
    filters,
    selected,
    setSelected,
    loadingFilters,
    loadingCharts,
    findCharts
  } = props

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          title="gradient image"
        >
          <Typography align='left' variant='h3' component='h3'>
            <Box fontWeight="fontWeightLight" p={1} className={ classes.title }>
                Карточка пациента
                </Box>
              </Typography>
          </CardMedia>
        <CardContent>
          <Grid container direction='column'>
            <Grid item container direction='row' spacing={2}> 
              { loadingFilters 
                ? (
                  <Grid item container alignItems='center' justify='center'>
                    <LoadingBar />
                  </Grid>
                ) : (
                  filters.map((param, idx) => (
                    <Slide key={idx} in={!loadingFilters} direction='up' mountOnEnter unmountOnExit>
                      <Grid item xs={6}>
                        <Typography align='left' variant='h5'>
                          { param.name }
                        </Typography>
                        {
                          param.params.map((item, idy) => (
                            <DashboardFilterParam
                              key={idy} id={item.id} row={item}
                              callbackSelect={setSelected}
                              val={selected}
                            />
                          ))
                        }
                      </Grid>
                    </Slide>
                  )))
              }
            </Grid>
            <Grid item align='right'>
              <SubmitButton  disabled={ loadingCharts } onClick={ () => ( findCharts() ) }>
                Перейти к типам лечения
                { 
                  loadingCharts &&
                  <CircularProgress size={24} className={classes.buttonProgress} />
                }
              </SubmitButton>
            </Grid>
          </Grid>
        </CardContent>
    </Card>
  )
}

DashboardFilter.propTypes = {
  filters: PropTypes.array.isRequired,
  selected: PropTypes.object.isRequired,
  setSelected: PropTypes.func.isRequired,
  findCharts: PropTypes.func.isRequired,
  loadingFilters: PropTypes.bool,
  loadingCharts: PropTypes.bool,
}

DashboardFilter.defaultProps = {
  filters: [],
  selected: {},
  setSelected: () => {},
  findCharts: () => {},
  loadingFilters: false,
  loadingCharts: false,
}

export default DashboardFilter
