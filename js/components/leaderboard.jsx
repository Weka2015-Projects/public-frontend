import React, { Component } from 'react'
import R from 'ramda'
import Highscore from './highscore.jsx'

class Leaderboard extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    const scores = []

    return (
      <div className="highscore-container">
        <h4>Highscores</h4>
        <div className="row">
        </div>
      </div>
    )
  }
}

export default Leaderboard
