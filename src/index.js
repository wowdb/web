import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Home } from './scenes'

import * as serviceWorker from './serviceWorker'

import './index.scss'

class WoWdb extends Component {
  render() {
    return <Home />
  }
}

ReactDOM.render(<WoWdb />, document.getElementById('root'))

serviceWorker.unregister()
