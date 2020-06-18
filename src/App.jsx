import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import Landing from './components/Landing'

const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
      <Switch>
        <Route path="/main" component={Landing} />
        <Route component={Landing} />
      </Switch>
    </HashRouter>
    </ThemeProvider>
  )
}

export default App
