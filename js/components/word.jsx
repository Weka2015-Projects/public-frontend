import React, { Component } from 'react'

class Word extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    const { word } = this.props
    return(
      <div>
        {word}
      </div>
    )
  }
}

export default Word
