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
          <div className="site-title">
            Text invaders
          </div>
          <div className="navigation">
            <Login />
          </div>
        </div>
      </div>
    )
  }
}

export default Nav
