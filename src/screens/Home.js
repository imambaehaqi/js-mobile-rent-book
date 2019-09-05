import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class Home extends Component {
    render() {
        return (
            <View>
                <Text> HOME </Text>
                <Button onPress = {() => this.props.navigation.push('Detail')} title = 'Detail'/>
            </View>
        )
    }
}

export default Home
