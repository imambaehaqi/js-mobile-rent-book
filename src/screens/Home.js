import React, { Component } from 'react'
import { Text, View, Button, ScrollView } from 'react-native'

import Styles from '../styles/index'

import SearchBook from '../components/SearchBook'
import CarouselBook from '../components/CarouselBook'
import CardBook from '../components/CardBook'

import {connect} from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            SignUpForm: {}
        }
    }

    render() {
        return (
            <View style={Styles.container2}>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style={Styles.textAuth}> BOOKZ </Text>
                    </View>
                    <View style={{flex:2}}>
                        <SearchBook/>
                    </View>
                </View>
                <ScrollView>
                    <CarouselBook />
                    <View style={{paddingTop:60}}>
                        <Text style={Styles.textAuth2}>Popular Books</Text>
                    </View>
                    <CardBook {...this.props} /> 
                    <Button onPress = {() => this.props.navigation.push('Detail')} title="Detail"/>  
                </ScrollView>                
            </View>
        )
    }
}
    const MapStateToProps = state => {
        return { user: state.user}
    }
    
    export default connect (MapStateToProps) (Home)
