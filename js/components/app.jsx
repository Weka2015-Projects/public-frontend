import React, { Component } from 'react'
import Game from './game.jsx'
import Nav from './nav.jsx'
import request from 'superagent'

class App extends Component {
  constructor (props) {
    super(props)
  }


  render() {
    return(
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

export default App
