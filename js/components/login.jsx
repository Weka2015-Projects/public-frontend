import React, { Component } from 'react'

class Login extends Component {
  constructor (props) {
    super(props)
  }
  handleSubmit(e) {
    const { store } = this.context
    e.preventDefault()
    store.dispatch({
      type:'SIGN_IN',
      data: this.refs.username.value
    })
    window.location.href = '/#/'
  }
  render() {
    return(
      <form className="sign-in" onSubmit={this.handleSubmit.bind(this)}>
        <label>Username</label>
        <input ref="username" placeholder="Whatever you want"></input>
        <button className="btn btn-success">Sign in</button>
      </form>
    )
  }
}
Login.contextTypes = {
  store: React.PropTypes.object
}
export default Login
