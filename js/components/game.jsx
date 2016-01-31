import React, { Component } from 'react'
import WordBox from './wordbox.jsx'
import Score from './score.jsx'
import Leaderboard from './leaderboard.jsx'
import Textshooter from './textshooter.jsx'
import R from 'ramda'

class Game extends Component {
  constructor (props, context) {
    super(props)
  }
  loadGame(e) {
    const { store } = this.context
    e.preventDefault()
    store.dispatch({
      type:'NEW_GAME',
      data:['hi', 'bob'],
      id: 0,
      highscores: [{
        name: 'Nilu the destroyer',
        score: 120
      },
      {
        name: 'Last of the Brohicans',
        score: 20
      }
    ]
    })
  }
  restartGame(e){
    const { store } = this.context
    e.preventDefault()
    store.dispatch({
      type:'RESTART_GAME'
    })
  }
  componentWillUpdate() {
    const { store } = this.context
    const state = store.getState()
    if (state.game.active) {
      const remainingWords = R.filter((word) => word.completed === false, state.game.content)
      if (remainingWords.length === 0) {
        store.dispatch({
          type: 'WIN_GAME'
        })
      console.log('You win')
      }
    }
  }
  render() {
    const { store } = this.context
    const state = store.getState()
    const loadGame =  <div className="btn btn-success" onClick={this.loadGame.bind(this)}>New Game</div>
    const restartGame = <div className="btn btn-success" onClick={this.restartGame.bind(this)}>Replay</div>
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-8 game-container">
            <WordBox />
            <Textshooter />
          </div>
          <div className="col-md-4 scores-container">
            <Score score={state.game.score}/>
            <Leaderboard scores={state.loadedData.highscores}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 actions-container">
            { !state.loadedData.active ? loadGame : restartGame }
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
