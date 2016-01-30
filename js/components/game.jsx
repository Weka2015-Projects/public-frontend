import React, { Component } from 'react'
import WordBox from './wordbox.jsx'
import Score from './score.jsx'
import Leaderboard from './leaderboard.jsx'
import Textshooter from './textshooter.jsx'

class Game extends Component {
  constructor (props, context) {
    super(props)
  }
  loadGame(e) {
    e.preventDefault()
    console.log('new game')
  }
  render() {
    const words = 'Game'
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-8">

            <WordBox />
            <Textshooter />
          </div>
          <div className="col-md-4">
            <Score />
            <Leaderboard />
          </div>
        </div>
        <div className="row">
          <div className="btn btn-success" onClick={this.loadGame.bind(this)}>New Game</div>
        </div>
      </div>
    )
  }
}

Game.contextTypes = {
  store: React.PropTypes.object
}

export default Game
