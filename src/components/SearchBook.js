import React from 'react'
import { TextInput, Image, View } from 'react-native'

import Styles from '../styles/index'

export default class App extends React.Component {
  state = {
    search: '',
  }

  updateSearch = search => {
    this.setState({ search })
  }

  render() {
    const { search } = this.state

    return (
        <View style={Styles.searchBar}>
            <TextInput style={{position:'relative', paddingLeft:45, paddingBottom:5}}
                placeholder="Search..."
                onChangeText={this.updateSearch}
                value={search}
            />
            <Image style={{position:'absolute', top:7, left:15}}
                source={require('../assets/magnifying-glass.svg')}
            />
        </View>
    )
  }
}