import React, { Component } from 'react'
import { Link } from 'react-router'


class Nav extends Component {
  constructor (props) {
    super(props)
  }
  signOut(e) {
    const { store } = this.context
    e.preventDefault()
    store.dispatch({
      type: 'SIGN_OUT'
    })
  }
  render() {
    const { store } = this.context
    const state = store.getState()
    const welcome =  <div className="welcome"> Welcome {state.user.username} <button onClick={this.signOut.bind(this)} className="btn btn-success">Sign Out</button></div>
    const signin =   <Link to="/users"><button className="btn btn-success">Sign In</button></Link>


    return(
      <div className="navbar">
        <div className="container">
          <div className="navbar-brand">
            Text Invaders
          </div>
          <div>
            {state.user.active ? welcome : signin }
          </div>
        </div>
      </div>
    )
  }
}
Nav.contextTypes = {
  store: React.PropTypes.object
}
export default Nav
