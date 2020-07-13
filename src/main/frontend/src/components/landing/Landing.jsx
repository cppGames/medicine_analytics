import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Card,
  Button,
  Typography ,
  CardContent,
} from '@material-ui/core'

import LandingImage from '../../../public/landingImage.jpg'
import LandingToolbar from './LandingToolbar'

const useStyles = makeStyles(theme => ({
  root: theme.page,
  card: Object.assign(theme.cardMaterial, {
    minWidth: '1280px'
  }),
  content: {
    padding: theme.spacing(4)
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '472px',
    maxHeight: '472px',
  },
  typography: {
    color: '#564857'
  },
  btn: {
    background: theme.colors.gradient,
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    width: 250,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(43, 172, 146, 0.3)',
    '&:hover': {
      backgroundColor: '#0195ac',
      borderColor: '#0062cc',
      boxShadow: 'none',
    }
  }
}))

const Landing = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.root}
    >
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Grid container direction='column'>
            <Grid item>
              <LandingToolbar />
            </Grid>
            <Grid container item direction='row'>
              <Grid item container xs={8} alignItems='center' justify='center' direction='column' style={{maxHeight: '472px'}} spacing={2}>
                <Grid item>
                  <Typography align='left' variant='h3' classes={{ root: classes.typography }}>
                    Аналитическая система рекомендаций
                  </Typography>
                  </Grid>
                  <Grid item container alignItems='flex-end'>
                  <Button size='large' classes={{ root: classes.btn }} onClick={ () => {} }>Get it</Button>
                </Grid>
                
              </Grid>
              <Grid item xs={4}>
                <img className={classes.img} alt='complex' src={LandingImage} />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Landing
