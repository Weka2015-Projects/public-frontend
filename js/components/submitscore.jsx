import React, { Component } from 'react'

class SubmitScore extends Component {
    constructor(props){
      super(props)
    }
    render() {
      const { gameId, score, player, status } = this.props
      console.log(player)
      return (
        <div className="game-over">
          <h3 className="status">
            You {status}!
          </h3>
          <h4 className="score">
            {score}
          </h4>
          <button className="btn">
            Submit your score?
          </button>
        </div>
      )
    }
}

export default SubmitScore
