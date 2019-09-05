import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'

import Styles from '../styles/index'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titleText: "Register Your Account",
            titleAuth: "Sign up",
            username: '',
            fullname: '',
            email: '',
            password: '',
            authFooter: "Sign in"
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
                        placeholder="Username"
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                    />
                    <TextInput
                        style={{borderBottomWidth: 0.3}}
                        placeholder="Fullname"
                        onChangeText={(fullname) => this.setState({fullname})}
                        value={this.state.fullname}
                    />
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
                            onPress={() => this.props.navigation.push('SignIn')} 
                            title="Sign Up"/>
                    </View>
                </View>
                <View>
                    <Text
                        onPress={() => this.props.navigation.push('SignIn')} 
                        style={Styles.authFooter}>{this.state.authFooter}
                    </Text>
                </View>
            </View>
        )
    }
}

export default SignUp
