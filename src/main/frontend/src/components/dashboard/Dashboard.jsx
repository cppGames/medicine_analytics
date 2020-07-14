import React, { useState, useEffect } from 'react'
import { 
  Grid
} from '@material-ui/core'
import axios from 'axios'
import { makeStyles } from '@material-ui/styles'
import { get_type } from '../../util/data'
import { get_new_type } from '../../util/data'
import { clean } from '../../util/serverRequest'

import DashboardChart from './DashboardChart'
import DashboardFilter from './DashboardFilter'

const useStyles = makeStyles(theme => ({
  root: { 
    ... theme.page,
    padding: theme.spacing(10),
  },
  mainFrame: {
    paddingBottom: theme.spacing(2)
  }
}))

const Dashboard = () => {
  const classes = useStyles()

  const [loadingFilters, setLoadingFilters] = useState(false)
  const [filters, setFilters] = useState([])
  useEffect(() => {
    setLoadingFilters(true)
    axios
      .get('http://localhost:9000/v1/api/patient-card/filter-dashboard')
      .then(response => {
        console.info(`get all filters`)
        setFilters(response.data)
        setLoadingFilters(false)
        console.log(`now flag loadingFilters is ${ loadingFilters }`)
        // setFilters(get_type())
      })
      .catch(error => { 
        console.error(`failed to get filters: ${error}`)
      })
  }, [])
  
  const [selected, setSelected] = useState({})
  const [loadingCharts, setLoadingCharts] = useState(false)
  const [types, setTypes] = useState({})
  const findCharts = () => {
    if (Object.keys(selected).length !== 0) {
      clean(selected)
      setLoadingCharts(true)
      axios
      .post('http://localhost:9000/v1/api/patient-card/', selected)
      .then(response => {
        console.log(`get types by selected filters`)
        setTypes(response.data)
        setLoadingCharts(false)
      })
      .catch(error => { 
        console.log(`failed to get types by selected filters: ${error}`)
      })
      // setTypes(get_new_type())
    }
  }

  return(
    <Grid
      container
      direction='column'
      justify='flex-start'
      className={classes.root}>
      <Grid item className={classes.mainFrame}>
        <DashboardFilter
          filters={ filters }
          selected={ selected }
          setSelected={ setSelected }
          loadingFilters={ loadingFilters }
          loadingCharts={ loadingCharts }
          findCharts={ findCharts }
        />
      </Grid>
      { 
        Object.keys(types).length !== 0 &&
        <Grid item>
          <DashboardChart types={types}/>
        </Grid>
      }
    </Grid>
  )
}

export default Dashboard
