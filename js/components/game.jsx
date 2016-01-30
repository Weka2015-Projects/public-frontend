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
    const { store } = this.context
    e.preventDefault()
    store.dispatch({
      type:'NEW_GAME',
      content:['hi', 'bob']
    })
  }
  restartGame(e){
    const { store } = this.context
    e.preventDefault()
    store.dispatch({
      type:'RESTART_GAME'
    })
  }
  render() {
    const { store } = this.context
    const state = store.getState()
    const loadGame =  <div className="btn btn-success" onClick={this.loadGame.bind(this)}>New Game</div>
    const restartGame = <div className="btn btn-success" onClick={this.restartGame.bind(this)}>Replay</div>
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
          <div className="col-md-8">
            { !state.content.active ? loadGame : restartGame }
          </div>
        </div>
      </div>
    )
  }
}

Game.contextTypes = {
  store: React.PropTypes.object
}

export default Game
