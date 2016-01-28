import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class Textshooter extends Component {
  constructor (props) {
    super(props)
  }
  handleSubmit(e) {
    e.preventDefault()
    const { checkWord } = this.props
    const input = ReactDOM.findDOMNode(this.refs.shot).value
    ReactDOM.findDOMNode(this.refs.shot).value = ''
    checkWord(input)
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input placeholder="type faster!" ref="shot"/>
      </form>
    )
  }
}

export default Textshooter
