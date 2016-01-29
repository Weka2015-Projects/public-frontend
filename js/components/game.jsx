import React, { Component } from 'react'
import Word from './word.jsx'
import Score from './score.jsx'
import Leaderboard from './leaderboard.jsx'
import Textshooter from './textshooter.jsx'

class Game extends Component {
  constructor (props, ctx) {
    super(props)
    console.log(ctx)
  }
  checkWord (word) {
    const { game, completeWord } = this.props
    if(word === game.activeWords[0].content) {
      completeWord()
    } else {
      return
    }
  }
  render() {
    const { game } = this.props
    const words = game.activeWords
    let activeWords = []
    words.map((word, index) => {
      activeWords.push(<Word content={word.content} y={word.y} x={word.x} time={word.time} key={index}/>)
    })

    return(
      <div className="row">
        <div className="game col-md-12">
          <div className="game-wrapper col-md-8">
            <div className="word-wrapper">
                {activeWords}
            </div>
            <div className="shooter-wrapper">
              <Textshooter checkWord={this.checkWord.bind(this)}/>
            </div>
          </div>
          <div className="scores-wrapper col-md-4">
              <Score score={game.score}/>
              <Leaderboard plays={game.plays}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Game
