import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class Login extends Component {
    render() {
        return (
            <View>
                <Text> Here To Get Welcomed ! </Text>
                <Button onPress={() => this.props.navigation.push('SignUp')} title="SignUp"/>
                <Button onPress={() => this.props.navigation.push('Main')} title="SignIn"/>
            </View>
        )
    }
}

export default Login
