import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'

import Styles from '../styles/index'

import { connect } from 'react-redux'
import {login} from '../publics/actions/users'

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titleText: "Here To Get\nWelcomed !",
            titleAuth: "Sign in",
            authFooter: "Sign up",
            loginForm: {}
        }
    }

    handleChange = (name, value) => {
        let newFormData = {...this.state.loginForm}
        newFormData[name] = value
        this.setState({
            loginForm: newFormData
        })
    }

    handleSubmit = () => {
        const data = this.state.loginForm
        this.props.dispatch(login(data))
            .then(async res => {
                if(res.value.data.status === 401){
                    Toast.show({
                        text: 'Email or Password is wrong!',
                        buttonText: 'Ok'
                    })
                }else{
                    this.loggingIn()
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    loggingIn = () => {
        this.props.navigation.navigate('TabScreen')
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
                        keyboardType='email-address'
                        onChangeText={(text) => this.handleChange( 'email', text )}
                    />
                    <TextInput
                        secureTextEntry = {true}
                        style={{borderBottomWidth: 0.3}}
                        placeholder="Password"
                        onChangeText={(text) => this.handleChange( 'password', text )}
                    />
                    <View style={{flexDirection:'row', paddingTop:30}}>
                        <View style={{flex:1}}>
                            <Text style={Styles.textAuth}>{this.state.titleAuth}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Button
                                type='submit' onPress={() => this.handleSubmit()}
                                title="Sign In"/>
                        </View>
                    </View>
                </View>
                <View>
                    <Text
                        onPress = {() => {this.props.navigation.navigate('SignUp')}}
                        style={Styles.authFooter}>{this.state.authFooter}
                    </Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(SignIn)
