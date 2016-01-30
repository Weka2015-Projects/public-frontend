import { combineReducers } from 'redux'
import R from 'ramda'

const initialGame = {
  id: 0,
  score: 0,
  content: ['blah'],
  plays: [{

  }],
  activeWords: []
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
    case 'START_GAME':
      state.activeWords.push({
        content: state.content[0],
        y: 400,
        x: Math.random() * 700,
        time: 10
      })
      state.activeWords = R.remove(0, 1, state.activeWords)
      return state
    case 'COMPLETE_WORD':
      state.content = R.remove(0, 1, state.content)
      state.activeWords.push({
        content: state.content[0],
        y: 400,
        x: Math.random() * 700,
        time: 10
      })
      state.activeWords = R.remove(0, 1, state.activeWords)
      state.score = state.score + 10
      return state
    default:
      return state
  }
}

const textInvaders = combineReducers({games})

export default textInvaders
