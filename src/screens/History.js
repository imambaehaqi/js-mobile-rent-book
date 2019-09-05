import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { HeaderBackButton } from 'react-navigation-stack'

class History extends Component {
    render() 
    {
        return (
            <View>
                <HeaderBackButton/>
                <View>
                    <Text>HALO</Text>
                </View>
            </View>
        )
    }
}

export default History
