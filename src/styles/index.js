import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex:1,
        padding:20,
        justifyContent:'space-around'
    },
    welcome: {
        justifyContent:'center'
    },
    fontWelcome: {
        color:'grey',
        fontSize:24,
        fontWeight:'bold'
    },
    placeText: {
        borderBottomWidth: 0.3,
    },
    textAuth: {
        fontWeight:'bold',
        fontSize: 18,
        color: 'grey'
    },
    authFooter: {
        fontSize: 13,
        textDecorationLine: 'underline',
        color: 'grey'
    },
    container2: {
        padding:20
    },
    searchBar: {
        borderRadius: 15,
        backgroundColor: '#E5E6EE',
        
        height: 30,
    },
    carouselBar: {
        backgroundColor: '#28BFDB',
        borderRadius: 10,
        width:240,
        height:120,
        marginTop:30,
        flexDirection:'row',
        marginRight: 20
    },
    textCarousel: {
        color:'white',
        fontWeight:'bold',
        fontSize:15
    },
    cardBook:{
        paddingTop: 30,
        width:140,
        height:200
    },
    textTitle:{
        paddingTop: 10,
        fontSize: 10,
        color: '#98A0B3'
    },
    textAuth2: {
        fontWeight:'bold',
        fontSize: 24,
        color: 'grey'
    },
    childView: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
      },
      button: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
        padding: 15,
        backgroundColor: '#8ad24e',
      },
      StarImage: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
      },
      textStyle: {
        textAlign: 'center',
        fontSize: 23,
        color: '#000',
        marginTop: 15,
      },
      textStyleSmall: {
        textAlign: 'center',
        fontSize: 16,
    
        color: '#000',
        marginTop: 15,
      }
})