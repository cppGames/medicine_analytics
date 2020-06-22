import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  containerStyles: {
    height: 40,
    backgroundColor: '#e0e0de',
    margin: 20,
    position: 'relative',
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
    fontSize: 18,
  },
  labelStyles: {
    fontSize: 18,
    padding: 8,
    position: 'absolute',
    right: '0%',
  }
}))

const TypeProgressBar = (props) => {
  const { completed, status } = props
  const classes = useStyles(props)

  const statusParser = (status) => {
    switch(status) {
      case 'good':
        return 'Улучшение состояния'
      case 'bad':
        return 'Ухудшение состояния'
      case 'normal':
        return 'Без изменений'
      default:
        return ''
    }
  }

  return (
    <div className={classes.containerStyles}>
      <div className={classes.fillerStyles}>
        <div className={classes.percentStyles}>{`${completed}%`}</div>
      </div>
      <div className={classes.labelStyles}>{ statusParser(status) }</div>
    </div>
  )
}

TypeProgressBar.propTypes = {
  status: PropTypes.string.isRequired
}

TypeProgressBar.defaultProps = {
  status: ''
}

export default TypeProgressBar