import React, { Component } from 'react'

class Score extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    const { score } = this.props
    return(
      <div className="score">
        { score }
      </div>

    )
  }
}

export default Score
