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
          <div className="users">
            <div className="col-md-12">
              <h2>Sign in</h2>
              <p>Save your scores</p>
            </div>
            <div className="col-md-6">
              <Login />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Users.contextTypes = {
  store: React.PropTypes.object
}

export default Users
