import React, { Component } from 'react'
import { Link } from 'react-router'


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
          <div>
            <button className="btn btn-success"><Link to="/users">Sign In</Link></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav
