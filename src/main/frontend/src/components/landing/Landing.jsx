import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Card,
  Button,
  Typography ,
  CardContent,
} from '@material-ui/core'
import { useHistory  } from 'react-router-dom'
import LandingImage from '../../../public/landingImage.jpg'
import LandingToolbar from './LandingToolbar'

const useStyles = makeStyles(theme => ({
  root: theme.page,
  card: Object.assign(theme.cardMaterial, {
    width: '1024px'
  }),
  content: {
    padding: theme.spacing(2)
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '416px',
    maxHeight: '416px',
  },
  typography: {
    color: '#908a90'
  },
  btn: {
    background: theme.colors.gradient,
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    width: 250,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(185, 183, 204, 0.3)',
    '&:hover': {
      backgroundColor: '#0195ac',
      borderColor: '#0062cc',
      boxShadow: 'none',
    }
  }
}))

const Landing = () => {
  const classes = useStyles()
  const history = useHistory()

  const handleClick = (param) => {
    history.push(param)
  }
  
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
            {/* <Grid item>
              <LandingToolbar handleClick={ handleClick }/>
            </Grid> */}
            <Grid container item direction='row'>
              <Grid item container xs={7} alignItems='center' justify='center' direction='column' style={{maxHeight: '472px', paddingLeft: '16px'}} spacing={2}>
                <Grid item>
                  <Typography align='left' variant='h3' classes={{ root: classes.typography }}>
                    Аналитическая система рекомендаций
                  </Typography>
                  </Grid>
                  <Grid item container>
                  <Button
                    classes={{ 
                      root: classes.btn
                    }} 
                    onClick={ () => handleClick('/main') }
                  >
                    Подробнее
                  </Button>
                </Grid>
                
              </Grid>
              <Grid item xs={5}>
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
