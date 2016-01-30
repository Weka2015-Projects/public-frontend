import React, { Component } from 'react'
import Login from './login.jsx'

class Nav extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return(
      <div className="navbar">
        <div className="container">
          <div className="navbar-brand">
            Text Invaders
          </div>
          <Login />
        </div>
      </div>
    )
  }
}

export default Nav
