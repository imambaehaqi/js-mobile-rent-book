import React, { Component } from 'react'
import Main from './src/Main'
import store from './src/publics/store'
import { Provider } from 'react-redux'
import { Root } from 'native-base'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <Main />
        </Root>
      </Provider>
    )
  }
}