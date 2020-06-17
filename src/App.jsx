import React from 'react'
import { 
  Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Type from './components/type/Type'
import Main from './components/main/main'

const useStyles = makeStyles(theme => ({
  root: {
    'padding-top': '100px'
  }
}))

const App = () => {
  const classes = useStyles()

  return(
    <Grid container direction='column' align='center' justify='center' spacing={2} className={classes.root}>
      <Grid item xs={12}>
        <Main />
      </Grid>
      <Grid item xs={12}>
        <Type />
      </Grid>
    </Grid>
  )
}

export default App
