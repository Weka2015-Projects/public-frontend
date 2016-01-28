import React, { Component } from 'react'
import Word from './word.jsx'
import Score from './score.jsx'
import Textshooter from './textshooter.jsx'

class Game extends Component {
  constructor (props) {
    super(props)
  }
  checkWord (word) {
    const { words, completeWord } = this.props
    if(word === words[0]) {
      completeWord()
    } else {
      return
    }
  }
  render() {
    const { words } = this.props
    return(
      <div>
        <Word content={words[0]}/>
        <Textshooter checkWord={this.checkWord.bind(this)}/>
      </div>
    )
  }
}

export default Game
