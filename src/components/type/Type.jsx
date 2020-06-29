import React, { useState, useEffect } from 'react'
import {
  Card,
  Grid,
  Slide,
  Typography,
  CardContent
} from '@material-ui/core'

import { useHistory  } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import TypeProgressBar from './TypeProgressBar'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  card: {
    cursor: 'pointer',
    '&:hover': {
      // https://codepen.io/sdthornton/pen/wBZdXq
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
    }
  }
}))

const Type = (props) => {
  const classes = useStyles()

  let history = useHistory()
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked((prev) => !prev);
  }, [])

  const handleCardClick = (uri) => {
    history.push(`/${uri}`)
  }

  return (
    <Grid container spacing={2}>
      {
        Object.entries(props.types).map(([key, value]) => {
          return(
            <Grid item xs={6} key={key}>
              <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                <Card className={classes.card} onClick={ () => handleCardClick(key) }>
                  <CardContent>
                    <Typography align='left' variant='h5' component='h4'>
                      { value.name }                  
                    </Typography>
                    {
                      value.probability.map((item, idx) => (
                        <TypeProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} status={item.status} />
                      ))
                    }
                  </CardContent>
                </Card>
              </Slide>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

Type.propTypes = {
  types: PropTypes.object.isRequired
}

Type.defaultProps = {
  types: {}
}

export default Type
