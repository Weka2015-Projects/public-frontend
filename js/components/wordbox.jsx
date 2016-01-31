import React, { Component } from 'react'
import Word from './word.jsx'
import SubmitScore from './submitscore.jsx'
import R from 'ramda'

class WordBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      time: 0
    }
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
      data: gameArray,
      id: store.getState().loadedData.id,
      status: ''
    })
    document.getElementById('shooter').focus()
  }
  // componentDidUpdate(){
  //   const { store } = this.context
  //   const { time } = this.state
  //   const state = store.getState()
  //   const gameIsActive = state.game.active
  //   const gameIsOver = state.game.completed
  //   if (gameIsActive && time === 0 && !this.interval) {
  //     this.interval = setInterval(this.timer.bind(this), 1000)
  //     console.log('this duped')
  //   }
  //
  // }
  // timer() {
  //   const { store } = this.context
  //   const { time } = this.state
  //
  //   const gameIsOver = store.getState().game.completed
  //   const allWords = store.getState().game.content
  //   const activeWords = R.filter((word) => word.active === true, allWords)
  //   if (!gameIsOver) {
  //     this.setState({
  //       time: time + 1
  //     })
  //   }
  //   if (time % 6 === 0 && time !== 0) {
  //     store.dispatch({
  //       type: 'NEXT_WORD',
  //       index: allWords.indexOf(activeWords[activeWords.length - 1])
  //     })
  //   }
  //
  //   if(gameIsOver){
  //     clearInterval(this.interval)
  //   }
  // }
  render() {
    const { store } = this.context
    const state = store.getState()
    const gameIsActive = state.game.active
    const contentLoaded = state.loadedData.active
    const startButton = <div className='btn btn-success' onClick={this.startGame.bind(this)}>Start Game</div>
    const content = gameIsActive ? state.game.content : []
    const words = []
    content.map((word, index) => {
      words.push(<Word active={word.active} completed={word.completed} content={word.content} key={index} index={index}/>)
    })
    return(
      <div className="word-container">
        { state.game.completed ? <SubmitScore gameId={state.game.id} player={state.user.username} score={state.game.score} status={state.game.status}  /> : !gameIsActive && contentLoaded ? startButton : words }
      </div>
    )
  }
}

WordBox.contextTypes = {
  store: React.PropTypes.object
}

export default WordBox
