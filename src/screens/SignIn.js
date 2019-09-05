import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'

import Styles from '../styles/index'

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titleText: "Here To Get\nWelcomed !",
            titleAuth: "Sign in",
            email: '',
            password: '',
            authFooter: "Sign up"
        }
    }
    
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.welcome}>
                    <Text style={Styles.fontWelcome}>
                        {this.state.titleText}
                    </Text>
                </View>
                <View>
                    <TextInput
                        style={{borderBottomWidth: 0.3}}
                        placeholder="Email"
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                    />
                    <TextInput
                        style={{borderBottomWidth: 0.3}}
                        placeholder="Password"
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                    />
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style={Styles.textAuth}>{this.state.titleAuth}</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Button
                            onPress={() => this.props.navigation.push('Main')} 
                            title="Sign In"/>
                    </View>
                </View>
                <View>
                    <Text
                        onPress={() => this.props.navigation.push('SignUp')} 
                        style={Styles.authFooter}>{this.state.authFooter}
                    </Text>
                </View>
            </View>
        )
    }
}

export default SignIn
