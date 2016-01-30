import React, { Component } from 'react'
import { Link } from 'react-router'


class Nav extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    const { store } = this.context
    const state = store.getState()
    const welcome =  <div className="welcome"> Welcome {state.user.username}</div>
    const signin =   <button className="btn btn-success"><Link to="/users">Sign In</Link></button>


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
