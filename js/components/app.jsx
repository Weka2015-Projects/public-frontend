import React, { Component, PropTypes } from 'react'
import Game from './game.jsx'
import Nav from './nav.jsx'
import request from 'superagent'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    const { store } = this.context
    return(
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

App.contextTypes = {
  store: React.PropTypes.object
}

export default App
