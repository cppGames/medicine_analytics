import React from 'react'
import {
  Button,
  Toolbar,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root : {
    padding: 0,
  },
  toolbarButtons: {
    marginLeft: 'auto'
  }
}))

const LandingToolbar = (prop) => {
  const classes = useStyles()
  const { handleClick } = prop

  return (
    <Toolbar className={ classes.root }>
      <div className={ classes.toolbarButtons } />
      <Button color='inherit' onClick={ () => handleClick('/about') }>О нас</Button>
      <Button color='inherit' onClick={ () => handleClick('/contacts') }>Контакты</Button>
    </Toolbar>
  )
}

LandingToolbar.propTypes = {
  handleClick: PropTypes.func.isRequired
}

LandingToolbar.defaultProps = {
  handleClick: () => {}
}

export default LandingToolbar
