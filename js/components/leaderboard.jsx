import React, { Component } from 'react'
import Highscore from './highscore.jsx'

class Leaderboard extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    const { plays } = this.props
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
