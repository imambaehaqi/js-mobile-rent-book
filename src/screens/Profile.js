import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Profile extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:1, backgroundColor:'red'}}></View>
                <View style={{flex:2, backgroundColor:'blue'}}>
                    <View style={{alignItems:'center'}}><Text>HALO</Text></View>
                    <View><Text>HALO</Text></View>
                </View>
            </View>
        )
    }
}

export default Profile
