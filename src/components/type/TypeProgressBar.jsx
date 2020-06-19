import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  containerStyles: {
    height: 40,
    backgroundColor: '#e0e0de',
    margin: 20
  },
  fillerStyles: props => ({
    height: '100%',
    width: `${props.completed}%`,
    backgroundColor: props.bgcolor,
    borderRadius: 'inherit',
    float: 'left'
  }),
  percentStyles: {
    padding: 8,
    color: 'white',
    fontSize: 18
  },
  labelStyles: {
    float: 'right',
    fontSize: 18,
    padding: 8,
  }
}))

const TypeProgressBar = (props) => {
  const { completed } = props
  const classes = useStyles(props)

  return (
    <div className={classes.containerStyles}>
      <div className={classes.fillerStyles}>
        <div className={classes.percentStyles}>{`${completed}%`}</div>
      </div>
      <div className={classes.labelStyles}>Название шкалы</div>
    </div>
  );
};

export default TypeProgressBar