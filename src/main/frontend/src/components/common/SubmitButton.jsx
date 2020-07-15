import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const SubmitButton = withStyles(theme => ({
  root: {
    background: theme.colors.gradient,
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    width: 272,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(185, 183, 204, 0.3)',
    '&:hover': {
      backgroundColor: '#0195ac',
      borderColor: '#0062cc',
      boxShadow: 'none',
    }
  },
  disabled: {
    background: '#b9b9b9',
    color: 'white'
  }
}))(Button)

export default SubmitButton
