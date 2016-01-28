import React, { Component } from 'react'

class Highscore extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    const {player, score } = this.props

    return(
      <div>
        {score}
        <span>{player}</span>
      </div>
    )
  }
}

export default Highscore
