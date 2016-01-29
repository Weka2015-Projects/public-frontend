import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class Textshooter extends Component {
  constructor (props) {
    super(props)
  }
  handleSubmit(e) {
    e.preventDefault()
    const { checkWord } = this.props
    const input = this.refs.shot.value
    this.refs.shot.value = ''
    checkWord(input)
  }
  render() {
    return(
      <form autoComplete="off" onSubmit={this.handleSubmit.bind(this)}>
        <input id="shooter" placeholder="Type the word and hit enter to kill it" ref="shot"/>
      </form>
    )
  }
}

export default Textshooter
