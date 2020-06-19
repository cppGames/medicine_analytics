import React from 'react'
import { 
  Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

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

const App = () => {
  const classes = useStyles()

  return(
    <Grid container direction='column' align='center' justify='center' spacing={2} className={classes.root}>
      <Grid item xs={12}>
        <Main />
      </Grid>
      <Grid item xs={12} className={classes.paramFrame}>
        <Type />
      </Grid>
    </Grid>
  )
}

export default App
