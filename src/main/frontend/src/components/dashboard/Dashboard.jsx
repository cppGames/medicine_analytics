import React, { useState, useEffect } from 'react'
import { 
  Grid
} from '@material-ui/core'
import axios from 'axios'
import { makeStyles } from '@material-ui/styles'
import { get_type } from '../../util/data'
import { get_new_type } from '../../util/data'
import { clean } from '../../util/serverRequest'

// import Type from './type/Type'
import Chart from '../chart/Chart'
import DashboardFilter from './DashboardFilter'

const useStyles = makeStyles(theme => ({
  root: { 
    padding: theme.spacing(10),
  },
  mainFrame: {
    paddingBottom: theme.spacing(2)
  },
  paramFrame : {
    // background: theme.colors.blue
  }
}))

const Dashboard = () => {
  const classes = useStyles()

  const [filters, setFilters] = useState({})
  // const [types, setTypes] = useState({})
  // useEffect(() => {
  //   if (Object.keys(filters).length !== 0) {    
  //     setTypes(get_type())
  //   }
  // }, [filters])

  const [newTypes, setNewTypes] = useState({})
  useEffect(() => {
    if (Object.keys(filters).length !== 0) {
      clean(filters)
      axios
      .post('http://localhost:9000/v1/api/patient-card/', filters)
      .then(response => {
        console.log(`get types by filters`)
        setNewTypes(response.data)
      })
      .catch(error => { 
        console.log(`failed to get types by filters: ${error}`)
      })
      // setNewTypes(get_new_type())
      // console.log(newTypes)
    }
  }, [filters])

  return(
    <Grid container direction='column' align='center' justify='center' className={classes.root}>
      <Grid item xs={12} className={classes.mainFrame}>
        <DashboardFilter setFilters={ setFilters }/>
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

export default Dashboard
