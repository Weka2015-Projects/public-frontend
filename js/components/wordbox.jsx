import React, { Component } from 'react'
import Word from './word.jsx'

class WordBox extends Component {
  constructor (props) {
    super(props)

  }
  startGame(e) {
    const { store } = this.context
    e.preventDefault()
    const gameContent = store.getState().loadedData.content
    const gameArray = gameContent.map((word) => {
      return {
        content: word,
        active: false,
        completed: false
      }
    })
    store.dispatch({
      type: 'START_GAME',
      data: gameArray
    })
    document.getElementById('shooter').focus()
  }
  render() {
    const { store } = this.context
    const state = store.getState()
    const gameIsActive = state.game.active
    const contentLoaded = state.loadedData.active
    const startButton = <div className='btn btn-success' onClick={this.startGame.bind(this)}>Start Game</div>
    const content = gameIsActive ? state.game.content : []
    const words = []
    content.map((word, index) => {
      words.push(<Word active={word.active} completed={word.completed} content={word.content} key={index}/>)
    })
    return(
      <div className="word-container">
        { !gameIsActive && contentLoaded ? startButton : words}
      </div>
    )
  }
}

WordBox.contextTypes = {
  store: React.PropTypes.object
}

export default WordBox
