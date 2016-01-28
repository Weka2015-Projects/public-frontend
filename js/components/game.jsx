import React, { Component } from 'react'
import Word from './word.jsx'
import Score from './score.jsx'
import Leaderboard from './leaderboard.jsx'
import Textshooter from './textshooter.jsx'

class Game extends Component {
  constructor (props) {
    super(props)
  }
  checkWord (word) {
    const { game, completeWord } = this.props
    if(word === game.content[0]) {
      completeWord()
    } else {
      return
    }
  }
  render() {
    const { game } = this.props

    return(
      <div className="game">
        <div className="game-wrapper">
          <div className="word-wrapper">
            <Word content={game.content[0]}/>
          </div>
          <div className="shooter-wrapper">
            <Textshooter checkWord={this.checkWord.bind(this)}/>
          </div>
        </div>
        <div className="scores-wrapper">
            <Score score={game.score}/>
            <Leaderboard plays={game.plays}/>
        </div>
      </div>
    )
  }
}

export default Game
