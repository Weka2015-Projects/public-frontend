import React, { Component } from 'react'

class Score extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    const { score } = this.props
    return(
      <div className="current-score">
        {score}
      </div>
    )
  }
}

export default Score
