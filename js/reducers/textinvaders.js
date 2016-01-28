import { combineReducers } from 'redux'
import R from 'ramda'

const initialGame = {
  score: 0,
  content: [''],
  plays: [{
    player_id: 1,
    score: 10
  }]
}

const initialUser = {
  id: 0,
  name: ''
}

const users = (state = initialUser, action) => {
  switch(action.type) {
    case "SIGN_IN":
      return action.content
    default:
      return state
  }
}

const games = (state = initialGame, action) => {
  switch(action.type) {
    case 'NEW_GAME':
      return action.content
    case 'COMPLETE_WORD':
      state.content = R.remove(0, 1, state.content)
      state.score = state.score + 10
      return state
    default:
      return state
  }
}

const textInvaders = combineReducers({games})

export default textInvaders
