import React, { Component } from 'react'
import Word from './word.jsx'
import Score from './score.jsx'
import Leaderboard from './leaderboard.jsx'
import Textshooter from './textshooter.jsx'

class Game extends Component {
  constructor (props, context) {
    super(props)
  }

  render() {
    const words = 'Game'
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="words">
              {words}
            </div>
            <Textshooter />
          </div>
          <div className="col-md-4">
            <Score />
            <Leaderboard />
          </div>
        </div>
        <div className="row">

        </div>
      </div>
    )
  }
}

Game.contextTypes = {
  store: React.PropTypes.object
}
export default Game
