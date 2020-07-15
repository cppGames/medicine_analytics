import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'


const styles = (theme) => ({
  root: {
    position: 'relative',
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  top: {
    color: '#4ebfd1',
    animationDuration: '950ms',
    position: 'absolute',
    left: 0,
  },
  circle: {
    strokeLinecap: 'round',
  },
})

const LoadingBar = (props) => {
  const { classes } = props  

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        className={ classes.bottom }
        size={40}
        thickness={4}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={ classes.top }
        classes={{
          circle: classes.circle,
        }}
        size={40}
        thickness={4}
      />
    </div>
  )
}

export default withStyles(styles)(LoadingBar)
