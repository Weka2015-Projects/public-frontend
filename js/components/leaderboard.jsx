import React, { Component } from 'react'
import R from 'ramda'
import Highscore from './highscore.jsx'

class Leaderboard extends Component {
  constructor (props) {
    super(props)
  }

  render() {

    return (
      <div>
        <h4>Highscores</h4>
        <div className="">
          <Highscore />
        </div>
      </div>
    )
  }
}

export default Leaderboard
