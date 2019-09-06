import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'

import Styles from '../styles/index'

import { register } from '../publics/actions/users'

import { connect } from 'react-redux'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titleText: "Register Your Account",
            titleAuth: "Sign up",
            authFooter: "Sign in",
            registerForm: {}
        }
    }

    handleChange = (name, value) => {
        let newFormData = {...this.state.SignUpForm}
        newFormData[name] = value
        this.setState({
            registerForm: newFormData
        })
    }

    handleSubmit = () => {
        const data = this.state.registerForm
        this.props.dispatch(register(data))
            .then(res => {
                if(res.value.data.status === 401){
                    console.log('Failed Register')
                }else{
                    this.registered()
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    registered = () => {
        this.props.navigation.navigate('SignIn')
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
                        onChangeText={text => this.handleChange( 'username', text )}
                    />
                    <TextInput
                        style={{borderBottomWidth: 0.3}}
                        placeholder="Fullname"
                        onChangeText={text => this.handleChange( 'fullname', text )}
                    />
                    <TextInput
                        style={{borderBottomWidth: 0.3}}
                        placeholder="Email"
                        keyboardType='email-address'
                        onChangeText={text => this.handleChange( 'email', text )}
                    />
                    <TextInput
                        style={{borderBottomWidth: 0.3}}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={text => this.handleChange( 'password', text )}
                    />
                    
                    <View style={{flexDirection:'row', paddingTop:30}}>
                        <View style={{flex:1}}>
                            <Text style={Styles.textAuth}>{this.state.titleAuth}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Button
                                onPress={() => this.handleSubmit()}
                                title="Sign Up"/>
                        </View>
                    </View>
                </View>
                <View>
                    <Text
                        onPress={()=> this.props.navigation.navigate('SignIn')} 
                        style={Styles.authFooter}>{this.state.authFooter}
                    </Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(SignUp)
