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
    default:
      return state
  }
}
const content = (state = initialContent, action) => {
  switch(action.type) {
    default:
      return state
  }
}
const game = (state = initialGame, action) => {
  switch(action.type) {
    default:
      return state
  }
}

const textInvaders = combineReducers({game, content, user})

export default textInvaders
