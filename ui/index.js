import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import Servers from 'components/Servers'

let routes =
  <Router
    history = { createBrowserHistory() }
  >
    <Route
      path = "/servers"
      component = { Servers }
    />
  </Router>

render(routes, document.getElementById(`root`))
