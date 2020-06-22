import React, { useState, useEffect } from 'react'
import { 
  Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { get_type } from '../util/data'

import Type from './type/Type'
import Main from './main/main'

const useStyles = makeStyles(theme => ({
  root: { 
    padding: theme.spacing(3),
  },
  mainFrame: {},
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

  return(
    <Grid container direction='column' align='center' justify='center' spacing={2} className={classes.root}>
      <Grid item xs={12}>
        <Main setFilters={ setFilters }/>
      </Grid>
      { 
        Object.keys(types).length !== 0 &&
        <Grid item xs={12} className={classes.paramFrame}>
          <Type types={types}/>
        </Grid>
      }
    </Grid>
  )
}

export default Landing
