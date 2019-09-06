import Ionicons from 'react-native-vector-icons/Ionicons'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import SignInScreen from './screens/SignIn'
import SignUpScreen from './screens/SignUp'

import HomeScreen from './screens/Home'
import ProfileScreen from './screens/Profile'
import HistoryScreen from './screens/History'
import DetailScreen from './screens/Detail'

const HomeMain = createStackNavigator(
  {
      Home: { screen: HomeScreen },
      Detail: { screen: DetailScreen }
  },{
      headerMode: "none"
  }
)

const HomeTabNavigation = createBottomTabNavigator(
  {
      Home: HomeMain,
      History: HistoryScreen,
      Profile: ProfileScreen
  },{
      navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ tintColor }) => {
              const { routeName } = navigation.state;
              // let IconComponent = Ionicons;
              let iconName = Ionicons
              if (routeName === 'Home') {
                  iconName = `home`
              } else if (routeName === 'History') {
                  iconName = `time`
              } else if (routeName = 'Profile') {
                  iconName = 'person'
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={25} color={tintColor} />
          }
      }),
      tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
      }
  }
)

const MainNavigate = createSwitchNavigator(
  {
      SignIn: { screen: SignInScreen },
      SignUp: { screen: SignUpScreen },
      TabScreen: { screen: HomeTabNavigation }
  }
)

export default createAppContainer( MainNavigate )