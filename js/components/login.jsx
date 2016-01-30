import React, { Component } from 'react'
import { Link } from 'react-router'
class Login extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return(
      <div>
        <button className="btn btn-success"><Link to="/users">Sign In</Link></button>
      </div>
    )
  }
}

export default Login
