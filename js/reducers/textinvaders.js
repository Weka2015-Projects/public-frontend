import { combineReducers } from 'redux'
import R from 'ramda'

const initialGame = {
  active: false,
  content: [
    {
      content: '',
      active: false,
      completed: false
    }
  ],
  id: 5,
  score: 0,
  completed: false
}
const initialContent = {
  active: false,
  content: '',
  highscores: []
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
const loadedData = (state = initialContent, action) => {
  switch(action.type) {
    case 'NEW_GAME':
      return {
        active: true,
        content: action.data,
        id: action.id,
        highscores: action.highscores
      }
    default:
      return state
  }
}
const game = (state = initialGame, action) => {
  switch(action.type) {
    case 'START_GAME':
      const newGame = {
          active: true,
          content: action.data,
          score: 0,
          id: action.id,
          status: action.status
        }
      newGame.content[0].active = true
      return newGame
    case 'NEXT_WORD':
      return state
    case 'COMPLETE_WORD':
      state.content[action.index] = {
        content: action.word,
        active: false,
        completed: true
      }
      if (state.content[action.index + 1]) {
        state.content[action.index + 1].active = true
      }
      state.score = state.score + 10
      return state
    case 'WIN_GAME':
      state.active = false
      state.completed = true
      state.status = "Won"
      return state
    case 'LOSE_GAME':
      state.active = false
      state.completed = true
      state.status = "Lost"
      return state
    case 'RESTART_GAME':
      const replay = {
          active: false,
          content: action.data,
          score: 0,
          id: action.id,
          status: action.status
        }
      return replay
    default:
      return state
  }
}

const textInvaders = combineReducers({game, loadedData, user})

export default textInvaders
