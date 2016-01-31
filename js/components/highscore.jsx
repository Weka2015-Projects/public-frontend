import React, { Component } from 'react'

class Highscore extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    const { name, score } = this.props
    return(
      <div className="highscore col-md-12">
        <div className="col-xs-3 number">
          {score}
        </div>
        <div className="col-xs-9 name">
          {name}
        </div>
      </div>
    )
  }
}

export default Highscore
