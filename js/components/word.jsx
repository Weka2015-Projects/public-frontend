import React, { Component } from 'react'
import $ from 'jquery'

class Word extends Component {
  constructor (props) {
    super(props)
    this.state = {
      time: 7
    }
  }
  componentDidMount() {
    const { time } = this.state
    const { active } = this.props
    $('.translate').animate({
      top: '600px'
    }, {
      duration: 0,
      easing: 'linear'
    })
   if(time === 7 && active) {
      this.interval = setInterval(this.tick.bind(this), 1000)
    }
      if(!active) {
      clearInterval(this.interval)
    }
  }
  componentDidUpdate() {
    const { time } = this.state
    const { active } = this.props
    $('.translate').animate({
      top: '600px'
    }, {
      duration: 0,
      easing: 'linear'
    })
    if(time === 7 && active && !this.interval) {
      this.interval = setInterval(this.tick.bind(this), 1000)
    }
    if(!active) {
      clearInterval(this.interval)
    }

  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  tick() {
    const { time } = this.state
    const { store } = this.context
    const { content } = this.props
    console.log(content, time)
    if (time === 0) {
      store.dispatch({
        type: 'LOSE_GAME'
      })
    clearInterval(this.interval)
    return
    }
    this.setState({
      time: time - 1
    })
  }
  render() {
    const { content, active, completed, index } = this.props
    const display = active && !completed ? 'inline-block' : 'none'
    const transitions = active ? 'translate' : 'static'
    return(
      <div className={ "word " + transitions } style={{ display: display, zIndex: index }}>{content}</div>
    )
  }
}

Word.contextTypes = {
  store: React.PropTypes.object
}
export default Word
