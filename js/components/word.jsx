import React, { Component } from 'react'
import $ from 'jquery'

class Word extends Component {
  constructor (props) {
    super(props)
  }
  componentDidMount() {
    $('.translate').animate({
      top: '600px'
    }, {
      duration: 0,
      easing: 'linear'
    })
  }
  componentDidUpdate() {
    $('.translate').animate({
      top: '600px'
    }, {
      duration: 0,
      easing: 'linear'
    })
  }
  render() {
    const { content, active, completed } = this.props
    const display = active && !completed ? 'inline-block' : 'none'
    const transitions = active ? 'translate' : 'static'
    return(
      <div className={ "word " + transitions } style={{ display: display, }}>{content}</div>
    )
  }
}

export default Word
