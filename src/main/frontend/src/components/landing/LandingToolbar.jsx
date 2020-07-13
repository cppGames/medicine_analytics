import React from 'react'
import {
  Button,
  Toolbar,
} from '@material-ui/core'
import { useHistory  } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root : {
    padding: 0,
  },
  toolbarButtons: {
    marginLeft: 'auto'
  }
}))

const LandingToolbar = () => {
  const classes = useStyles()
  const history = useHistory()

  const handleClick = (param) => {
    history.push(param)
  }

  return (
    <Toolbar className={ classes.root }>
      <div className={ classes.toolbarButtons } />
      <Button color='inherit' onClick={ () => handleClick('/main') }>Dashboard</Button>
      <Button color='inherit' onClick={ () => handleClick('/about') }>About</Button>
      <Button color='inherit' onClick={ () => handleClick('/contacts') }>Contacts</Button>
    </Toolbar>
  )
}

export default LandingToolbar
