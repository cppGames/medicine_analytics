import React, { useState, useEffect } from 'react'
import { 
  Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { get_type } from '../util/data'
import { get_new_type } from '../util/data'

// import Type from './type/Type'
import Chart from './chart/Chart'
import Main from './main/main'

const useStyles = makeStyles(theme => ({
  root: { 
    padding: theme.spacing(4),
  },
  mainFrame: {
    paddingBottom: theme.spacing(2)
  },
  paramFrame : {
    // background: theme.colors.blue
  }
}))

const Landing = () => {
  const classes = useStyles()

  const [filters, setFilters] = useState({})
  const [types, setTypes] = useState({})
  useEffect(() => {
    if (Object.keys(filters).length !== 0) {    
      setTypes(get_type())
    }
  }, [filters])

  const [newTypes, setNewTypes] = useState({})
  useEffect(() => {
    if (Object.keys(filters).length !== 0) {    
      setNewTypes(get_new_type())
      console.log(newTypes)
    }
  }, [filters])

  return(
    <Grid container direction='column' align='center' justify='center' className={classes.root}>
      <Grid item xs={12} className={classes.mainFrame}>
        <Main setFilters={ setFilters }/>
      </Grid>
      {/* { 
        Object.keys(types).length !== 0 &&
        <Grid item xs={12} className={classes.paramFrame}>
          <Type types={types}/>
        </Grid>
      } */}
      { 
        Object.keys(newTypes).length !== 0 &&
        <Grid item xs={12} className={classes.paramFrame}>
          <Chart types={newTypes}/>
        </Grid>
      }
    </Grid>
  )
}

export default Landing
