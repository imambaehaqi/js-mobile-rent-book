import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'

import Styles from '../styles/index'
import { ScrollView } from 'react-native-gesture-handler'

class CarouselBook extends Component {
    render() {
        return (
            <ScrollView horizontal>
            <View style={Styles.carouselBar}>
                <View style={{marginHorizontal:20, justifyContent:'center', alignItems:'center'}}>
                    <Text style={Styles.textCarousel}>
                        Action    
                    </Text>                    
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Image 
                        source={require('../assets/output-onlinepngtools.svg')}/>
                </View>
            </View>
            <View style={Styles.carouselBar}>
                <View style={{marginHorizontal:20, justifyContent:'center', alignItems:'center'}}>
                    <Text style={Styles.textCarousel}>
                        Action    
                    </Text>                    
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Image 
                        source={require('../assets/output-onlinepngtools.svg')}/>
                </View>
            </View>
            <View style={Styles.carouselBar}>
                <View style={{marginHorizontal:20, justifyContent:'center', alignItems:'center'}}>
                    <Text style={Styles.textCarousel}>
                        Action    
                    </Text>                    
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Image 
                        source={require('../assets/output-onlinepngtools.svg')}/>
                </View>
            </View>
            <View style={Styles.carouselBar}>
                <View style={{marginHorizontal:20, justifyContent:'center', alignItems:'center'}}>
                    <Text style={Styles.textCarousel}>
                        Action    
                    </Text>                    
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Image 
                        source={require('../assets/output-onlinepngtools.svg')}/>
                </View>
            </View>
            </ScrollView>
            
        )
    }
}

export default CarouselBook
