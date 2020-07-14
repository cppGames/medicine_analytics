import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import Dashboard from './components/dashboard/Dashboard'
import Whoops from './components/whoops/Whoops'
import Landing from './components/landing/Landing'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group'


const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/*
        empty route give two component at the same time
        and allow setting animation
        timeout - is panding between components
      */}
      <Route render={({location}) => {
        return (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames='fade'
            >
              <Switch location={location}>
                <Route path='/main' component={Dashboard} />
                <Route path='/' component={Landing} />
                <Route component={Whoops} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}} />
    </ThemeProvider>
  )
}

export default App
