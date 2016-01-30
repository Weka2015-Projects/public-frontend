import React, { Component } from 'react'
import Word from './word.jsx'

class WordBox extends Component {
  constructor (props) {
    super(props)

  }
  startGame(e) {
    const { store } = this.context
    e.preventDefault()

  }
  render() {
    const { store } = this.context
    const state = store.getState()
    const gameIsActive = state.game.active
    const contentLoaded = state.content.active
    const startButton = <div className='btn btn-success' onClick={this.startGame.bind(this)}>Start Game</div>

    const words = []
    return(
      <div>
        { !gameIsActive && contentLoaded ? startButton : words}
      </div>
    )
  }
}

WordBox.contextTypes = {
  store: React.PropTypes.object
}

export default WordBox
