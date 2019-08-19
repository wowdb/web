import './index.scss'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Home } from './scenes'
import * as serviceWorker from './serviceWorker'

class WoWdb extends Component {
  render() {
    return <Home />
  }
}

ReactDOM.render(<WoWdb />, document.getElementById('root'))

serviceWorker.register()
