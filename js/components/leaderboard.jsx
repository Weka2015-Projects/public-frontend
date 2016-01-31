import React, { Component } from 'react'
import R from 'ramda'
import Highscore from './highscore.jsx'

class Leaderboard extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    const { scores } = this.props
    const scoresRender = []
    scores.map((score, index) => {
      scoresRender.push(<Highscore name={score.name} score={score.score} key={index} />)
    })
    return (
      <div className="highscore-container">
        <h4>Highscores</h4>
          {scoresRender}
      </div>
    )
  }
}

export default Leaderboard
