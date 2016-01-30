import React, { Component } from 'react'

class Word extends Component {
  constructor (props) {
    super(props)
    this.state = {
      animate: false,
      translate: 'translateY(400px)',
      progress: false
    }
  }
  componentWillUpdate(props) {
   const { content } = this.props
   console.log(content, props.content)
   if (content !== props.content) {
       this.setState({
         animate: false,
         translate: 'none'
      })
    }
  }
  componentDidUpdate(){
    const { animate } = this.state
    if(!animate) {
      this.setState({
        animate: true,
        translate: 'none'
     })
    }
  }
  render() {
    const { content, time } = this.props
    const { animate, translate, position } = this.state
    console.log(translate)
    return(
      <div id="active" style={{ transform: translate }} className="active-word word">
        {content}
      </div>
    )
  }
}

export default Word
