import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SignIn from './src/screens/SignIn'
import SignUp from './src/screens/SignUp'
import Main from './src/Main'
import Detail from './src/screens/Detail'

const AppNavigator = createStackNavigator({
  SignIn: {
    screen: SignIn
  },
  Main: {
    screen: Main
  },
  Detail: {
    screen: Detail
  },
  SignUp: {
    screen: SignUp
  },
},{
    defaultNavigationOptions: {
      header: null
    }
  }
)

export default createAppContainer(AppNavigator)