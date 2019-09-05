import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Platform,
    Text,
    Image,
    TouchableOpacity,
  } from 'react-native'

import { ScrollView } from 'react-native-gesture-handler'
import Styles from '../styles/index'

class CardBook extends Component {
    constructor() {
        super();
        this.state = {
            Default_Rating: 2,
            //To set the default Star Selected
            Max_Rating: 5,
            //To set the max number of Stars
        };
        //Filled Star. You can also give the path from local
        this.Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    
        //Empty Star. You can also give the path from local
        this.Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
    }
    UpdateRating(key) {
        this.setState({ Default_Rating: key });
        //Keeping the Rating Selected in state
    }
    render() {
        let React_Native_Rating_Bar = [];
        //Array to hold the filled or empty Stars
        for (var i = 1; i <= this.state.Max_Rating; i++) {
            React_Native_Rating_Bar.push(
                <TouchableOpacity
                    activeOpacity={0.7}
                    key={i}
                    onPress={this.UpdateRating.bind(this, i)}>
                    <Image
                    style={styles.StarImage}
                    source={
                        i <= this.state.Default_Rating
                        ? { uri: this.Star }
                        : { uri: this.Star_With_Border }
                    }
                    />
                </TouchableOpacity>
            );
        }
        return (
            <ScrollView horizontal>
                <View>
                    <View style={Styles.cardBook}>
                        <Image 
                            source={require('../assets/Download-Novel-Dilan-Dia-Dilanku-Tahun-1990-PDF--709x1024.png')}/>
                        
                    </View>
                    <View style={{paddingTop:10}}>
                        <Text style={Styles.textTitle}>Paidi</Text>
                    </View>
                    <View>
                        <Text style={Styles.textAuth}>Dilan 1990</Text>
                    </View>
                    <View>
                        {/*View to hold our Stars*/}
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.childView}>{React_Native_Rating_Bar}</View>
                            <View>
                                <Text style={styles.textStyle}>
                                    {/*To show the rating selected*/}
                                    {this.state.Default_Rating}.{this.state.Max_Rating - 5}
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.button}
                            onPress={() => alert(this.state.Default_Rating)}>
                            {/*Clicking on button will show the rating as an alert*/}
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={Styles.cardBook}>
                        <Image 
                            source={require('../assets/Download-Novel-Dilan-Dia-Dilanku-Tahun-1990-PDF--709x1024.png')}/>
                        
                    </View>
                    <View style={{paddingTop:10}}>
                        <Text style={Styles.textTitle}>Paidi</Text>
                    </View>
                    <View>
                        <Text style={Styles.textAuth}>Dilan 1990</Text>
                    </View>
                    <View>
                        {/*View to hold our Stars*/}
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.childView}>{React_Native_Rating_Bar}</View>
                            <View>
                                <Text style={styles.textStyle}>
                                    {/*To show the rating selected*/}
                                    {this.state.Default_Rating}.{this.state.Max_Rating - 5}
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.button}
                            onPress={() => alert(this.state.Default_Rating)}>
                            {/*Clicking on button will show the rating as an alert*/}
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={Styles.cardBook}>
                        <Image 
                            source={require('../assets/Download-Novel-Dilan-Dia-Dilanku-Tahun-1990-PDF--709x1024.png')}/>
                        
                    </View>
                    <View style={{paddingTop:10}}>
                        <Text style={Styles.textTitle}>Paidi</Text>
                    </View>
                    <View>
                        <Text style={Styles.textAuth}>Dilan 1990</Text>
                    </View>
                    <View>
                        {/*View to hold our Stars*/}
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.childView}>{React_Native_Rating_Bar}</View>
                            <View>
                                <Text style={styles.textStyle}>
                                    {/*To show the rating selected*/}
                                    {this.state.Default_Rating}.{this.state.Max_Rating - 5}
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.button}
                            onPress={() => alert(this.state.Default_Rating)}>
                            {/*Clicking on button will show the rating as an alert*/}
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={Styles.cardBook}>
                        <Image 
                            source={require('../assets/Download-Novel-Dilan-Dia-Dilanku-Tahun-1990-PDF--709x1024.png')}/>
                        
                    </View>
                    <View style={{paddingTop:10}}>
                        <Text style={Styles.textTitle}>Paidi</Text>
                    </View>
                    <View>
                        <Text style={Styles.textAuth}>Dilan 1990</Text>
                    </View>
                    <View>
                        {/*View to hold our Stars*/}
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.childView}>{React_Native_Rating_Bar}</View>
                            <View>
                                <Text style={styles.textStyle}>
                                    {/*To show the rating selected*/}
                                    {this.state.Default_Rating}.{this.state.Max_Rating - 5}
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.button}
                            onPress={() => alert(this.state.Default_Rating)}>
                            {/*Clicking on button will show the rating as an alert*/}
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    childView: {
      flexDirection: 'row',
    },
    button: {
      justifyContent: 'center',
      marginTop: 10,
      backgroundColor: '#8ad24e',
    },
    StarImage: {
      width: 17,
      height: 17,
      resizeMode: 'cover'
    },
    textStyle: {
      fontSize: 16,
      paddingLeft: 10,
      color: 'grey'
    }
  })

export default CardBook
