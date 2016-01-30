import React, { Component } from 'react'

class Login extends Component {
  constructor (props) {
    super(props)
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log(this.refs.username.value)
    //Dispatch Sign-in and re
    window.location.href = '/#/'
  }
  render() {
    return(
      <form className="sign-in" onSubmit={this.handleSubmit.bind(this)}>
        <label>Username</label>
        <input ref="username" placeholder="Bubba"></input>
        <button className="btn btn-success btn-lg">Sign in</button>
      </form>
    )
  }
}

export default Login
