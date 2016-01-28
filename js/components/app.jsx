import React, { Component } from 'react'
import Game from './game.jsx'
import Nav from './nav.jsx'


class App extends Component {
  constructor (props) {
    super(props)
  }
  newGame() {
    const { store } = this.props
    const fakeGame = {
      id: 0,
      content : 'bubba chubba lubba dubb dubb suckit fill im making this up sucker',
      plays: [{
        player_id: 1,
        name: 'Jimbob',
        score: 10
      },
      {
        player_id: 2,
        name: 'Nilu the Destroyer',
        score: 5
      },
      {
        player_id: 3,
        name: 'Chompy',
        score: 100
      }],
      score: 0
    }
    fakeGame.content = fakeGame.content.split(' ')
    store.dispatch({
      type: 'NEW_GAME',
      content: fakeGame
    })
    document.getElementById('shooter').focus()
  }
  completeWord() {
    const { store } = this.props
    store.dispatch({
      type: 'COMPLETE_WORD'
    })
  }
  render() {
    const { store } = this.props
    const state = store.getState()
    const game = state.games
    return(
    <div className="app">
      <Nav />
      <div className="container">
        <Game game={game} completeWord={this.completeWord.bind(this)}/>
        <div className="row">
          <div className="col-md-8">
            <button className="new-game btn btn-lg" onClick={this.newGame.bind(this)}>New Game</button>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default App
