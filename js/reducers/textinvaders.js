import { combineReducers } from 'redux'
import R from 'ramda'

const initialGame = {
  content: ['']
}

const games = (state = initialGame, action) => {
  switch(action.type) {
    case 'NEW_GAME':
      return action.content
    case 'COMPLETE_WORD':
      state.content = R.remove(0, 1, state.content)
      return state
    default:
      return state
  }
}

const textInvaders = combineReducers({games})

export default textInvaders
