import React, { Component } from 'react'
import Game from './game.jsx'
import Leaderboard from './leaderboard.jsx'
import Nav from './nav.jsx'


class App extends Component {
  constructor (props) {
    super(props)
  }
  newGame() {
    const { store } = this.props
    const fakeGame = {
      id: 0,
      content : 'bubba chubba lubba dubb dubb suckit fill im making this up sucker'
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
    const words = store.getState().games.content
    return(
    <div className="app">
      <Nav />
      <div className="container">
        <Game words={words} completeWord={this.completeWord.bind(this)}/>
        <Leaderboard />
        <button onClick={this.newGame.bind(this)}>Get Game</button>
      </div>
    </div>
    )
  }
}

export default App
