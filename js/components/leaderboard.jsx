import React, { Component } from 'react'
import R from 'ramda'
import Highscore from './highscore.jsx'

class Leaderboard extends Component {
  constructor (props) {
    super(props)
  }
  sortScores() {
    const { plays } = this.props
    const mostRecent = R.sort((a, b) => {
      return b.score - a.score
    }, plays)
    return mostRecent
  }
  render() {
    const plays = this.sortScores()
    let leaders = []
    plays.map((play) => {
      leaders.push(<Highscore score={play.score} player={play.name} key={play.player_id}/>)
    })
    return(
      <div className="leaderboard">
        <h4>Highscores</h4>
        {leaders}
      </div>
    )
  }
}

export default Leaderboard
