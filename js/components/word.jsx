import React, { Component } from 'react'

class Word extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    const { content } = this.props
    return(
      <div id="active" className="word">
        {content}
      </div>
    )
  }
}

export default Word
