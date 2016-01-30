import { combineReducers } from 'redux'
import R from 'ramda'

const initialGame = {
  active: false,
  content: [
    {
      content: '',
      active: false,

    }
  ],
  score: 0
}
const initialContent = {
  active: false,
  content: ''
}
const initialUser = {
  active: false,
  username: ''
}


const user = (state = initialUser, action) => {
  switch(action.type) {
    case 'SIGN_IN':
      return {
        active: true,
        username: action.data
      }
    case 'SIGN_OUT':
      return {
        active: false,
        username: ''
      }
    default:
      return state
  }
}
const content = (state = initialContent, action) => {
  switch(action.type) {
    case 'NEW_GAME':
      return {
        active: true,
        content: action.data
      }
    default:
      return state
  }
}
const game = (state = initialGame, action) => {
  switch(action.type) {
    case 'START_GAME':
      return {
      active: true,
      content: [],
      score: 0,
      finished: false
    }
    case 'NEXT_WORD':
      return state
    case 'COMPLETE_WORD':
      return state
    case 'WIN_GAME':
      return state
    case 'LOSE_GAME':
      return state
    case 'RESTART_GAME':
      return state
    default:
      return state
  }
}

const textInvaders = combineReducers({game, content, user})

export default textInvaders
