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
        score: 10
      }],
      score: 0
    }
    fakeGame.content = fakeGame.content.split(' ')
    store.dispatch({
      type: 'NEW_GAME',
      content: fakeGame
    })
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
        <button onClick={this.newGame.bind(this)}>Get Game</button>
      </div>
    </div>
    )
  }
}

export default App
