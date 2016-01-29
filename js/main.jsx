import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import  textInvaders from './reducers/textinvaders.js'
import App from './components/app.jsx'


const mountNode = document.getElementById('app')

class Main extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return(
      <div>
        <App store={this.props.store} />
      </div>
    )
  }
}


const store = createStore(textInvaders)

const render = () => {
  ReactDOM.render(
    
      <Main store={store}/>
, mountNode)
}

store.subscribe(render)
render()
