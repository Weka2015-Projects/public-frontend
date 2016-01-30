import React, { Component } from 'react'

class Highscore extends Component {
  constructor (props) {
    super(props)
  }
  render() {

    return(
      <div className="row">
        <div className="col-xs-4">
          Points
        </div>
        <div className="col-xs-8">
          Player Name
        </div>
      </div>
    )
  }
}

export default Highscore
