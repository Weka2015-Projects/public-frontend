import React, { Component } from 'react'
import Login from './login.jsx'

class Users extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return(
      <div className="container">
        <div className="row">
          <h3>Sign in</h3>
          <p>To save your scores</p>
          Work pls
          <Login />
        </div>
      </div>
    )
  }
}

Users.contextTypes = {
  store: React.PropTypes.object
}

export default Users
