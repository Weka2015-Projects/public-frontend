import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import R from 'ramda'


class Textshooter extends Component {
  constructor (props) {
    super(props)
  }
  checkInput(e) {
    e.preventDefault()
    const input = this.refs.shooter.value
    const { store } = this.context
    const allWords = store.getState().game.content
    const activeWords = R.filter((word) => word.active === true, allWords)
    const targetWord = R.filter((word) => word.content === input, activeWords)
    if (targetWord.length) {
      this.refs.shooter.value = ''
      store.dispatch({
        type: 'COMPLETE_WORD',
        index: allWords.indexOf(targetWord[0]),
        word: input
      })
    }
    console.log(allWords)
  }
  render() {
    return(
      <form className="shooter" onSubmit={this.checkInput.bind(this)}>
        <input id="shooter" placeholder="Just shoot it" ref="shooter"></input>
      </form>
    )
  }
}
Textshooter.contextTypes = {
  store: React.PropTypes.object
}
export default Textshooter
