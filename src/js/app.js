import React from 'react'
import { render } from 'react-dom'
import Counter from './components/counter/counter'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counterApp from './reducers'
import store from './store'

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('app')
)