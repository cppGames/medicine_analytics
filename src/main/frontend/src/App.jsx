import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import Dashboard from './components/Dashboard'
import Whoops from './components/whoops/Whoops'
import About from './components/about/About'

const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
      <Switch>
        <Route path='/main' component={Dashboard} />
        <Route path='/about' component={About} />
        <Route component={ Whoops } />
      </Switch>
    </HashRouter>
    </ThemeProvider>
  )
}

export default App
