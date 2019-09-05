import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class DetailBook extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:3, backgroundColor:'tomato', justifyContent:'space-between'}}>
                    <Button
                        onPress={() => this.props.navigation.push('Main')} 
                        title="Back"/>
                    <Text>Title</Text>
                </View>
                <View style={{flex:1, backgroundColor:'blue', flexDirection:'row-reverse'}}>
                    <Text>aa</Text>
                </View>
                <View style={{flex:2, backgroundColor:'pink', alignContent:'space-between', flexDirection:'row'}}>
                    <Text>Description</Text>
                </View>
                <View style={{flex:1, backgroundColor:'yellow', alignItems:'center', justifyContent:'center'}}>
                    <Button
                        onPress={() => this.props.navigation.push('Main')} 
                        title="Rent"/>
                </View>
            </View>
        )
    }
}

export default DetailBook
