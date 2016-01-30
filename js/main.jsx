import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import  textInvaders from './reducers/textinvaders.js'
import App from './components/app.jsx'
import Game from './components/game.jsx'
import Users from './components/users.jsx'


import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'



const mountNode = document.getElementById('app')




const store = createStore(textInvaders)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
         <Route path="/" component={App}>
           <IndexRoute component={Game}/>
           <Route path="users" component={Users}/>
         </Route>
       </Router>
    </Provider>
, mountNode)
}

store.subscribe(render)
render()
