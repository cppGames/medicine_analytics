import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { 
  Grid,
  Button,
  Typography
} from '@material-ui/core'
import { useHistory  } from 'react-router-dom'
// https://dev.to/projectescape/programmatic-navigation-in-react-3p1l
// https://reacttraining.com/react-router/web/api/Hooks

const useStyles = makeStyles(theme => ({
  root: { 
    padding: theme.spacing(4),
  }
}))

const Whoops = () => {
  const classes = useStyles()

  let history = useHistory()
  const handleReturnClick = () => {
    history.push('/')
  }

  const handleAboutClick = () => {
    history.push('/about')
  }

  return(
    <Grid container direction='column' align='left' justify='center' className={classes.root}>
      <Grid item xs={12}>
        <Typography align='left' variant='h1' component='h1'>
          Whoops!
        </Typography>
      </Grid>
      <Grid item xs={12}>
      <Button 
        color='default'
        onClick={handleReturnClick}
        className={classes.wrapper}
      >
        Назад
      </Button>
      <Button 
        color='default'
        onClick={handleAboutClick}
        className={classes.wrapper}
      >
        about
      </Button>
      </Grid>
    </Grid>
  )
}

export default Whoops
