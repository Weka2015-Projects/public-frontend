import React, { Component } from 'react'

class Highscore extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    const { player, score } = this.props

    return(
      <div className="score">
        <span className="points col-xs-3">{score}</span>
        <span className="player col-xs-9">{player}</span>
      </div>
    )
  }
}

export default Highscore
