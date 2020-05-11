import 'react-native-gesture-handler';
import * as React from 'react';
import {
    StyleSheet,
    Button,
    Text,
    View,
    AsyncStorage,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView, Linking
} from 'react-native';
import OpenMap from "react-native-open-map";

const entireScreenWidth = Dimensions.get('window').width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create ({
    header: {
        fontSize: 34*rem,
        fontWeight: "600",
        paddingVertical: 16,
        paddingLeft: 34,
        paddingRight: 59
    },
    buttonText:{
        fontSize: 17*rem,
        paddingLeft: 16
    },
    buttonContainer:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#C0C0C0',
        paddingVertical: 10,
        paddingLeft: 34,
        paddingRight: 14
    },
    lastButtonContainer:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingVertical: 10,
        borderColor: '#C0C0C0',
        paddingLeft: 34,
        paddingRight: 14
    },
    buttonLeft:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonRight:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    chevron:{
        width: 11*rem,
        height: 18*rem
    },
    regularBold:{
        fontWeight: '600',
        color: '#000000',
        fontSize: 17*rem,
        paddingLeft: 30,
        paddingTop: 16,
        paddingBottom: 16,
        flexWrap: "wrap"
    },
    numberRow:{
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: "center",
        flexWrap: "wrap"
    },
    lastRow:{
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 50,
        justifyContent: "center",
        flexWrap: "wrap"
    },
    infoPhone: {
        width: 20*rem,
        height: 18*rem,
    },
    infoEmail: {
        width: 21*rem,
        height: 16*rem,
    },
    infoAddress: {
        width: 18*rem,
        height: 21*rem,
    },
    infoWeb: {
        width: 20*rem,
        height: 20*rem,
    },
    subHeader:{
        fontWeight: "700",
        fontSize: 20*rem,
        paddingLeft: 15,
        paddingTop: 23,
        paddingBottom: 9,
        borderBottomWidth: 2,
        borderColor: '#27C4CC'
    },
    infoText: {
        fontSize: 17*rem,
        color: '#616161',
        lineHeight: 20*rem,
        marginLeft: 10*rem,
        marginRight: 20*rem,
    },
    entryBox:{
        paddingLeft: 15,
        paddingVertical: 30*rem
    }
});


class Favorites extends React.Component {
    constructor(props){
        super(props);
        this.Food = this.Rerender();
    }
    removeFavorites(){};
     async SomeMethod(){
            let value = await AsyncStorage.getItem('Food');
            if (value !== null) {
                this.Food = JSON.parse(value);
            }
            else{
                this.Food = {Name: "Nothing here yet!"};
            }
            console.log(this.Food);
    };
    async Rerender() {
        await this.SomeMethod();
        this.forceUpdate();
    };
  render(){
    return (
        <View style={{backgroundColor: 'white', flex: 1}}>
        <Text style={styles.header}>Favorites</Text>
        <Image
            source={require('../../app/assets/images/headerImage_short.png')}
            style={{width: entireScreenWidth, height: 25*rem}}
        />
        <ScrollView style={styles.container}>
            <View style={{borderBottomWidth: 2, borderColor: '#27C4CC', flexDirection: "row", alignItems: 'center', paddingLeft: 20}}>
                <Image
                    source={require('../../app/assets/icons/bed.png')}
                    style={{width: 25*rem, height: 31 *rem}}
                />
                <Text style={styles.subHeader}>Hotels</Text>
            </View>
            <View style={styles.entryBox}>
                <Text> Nothing here yet! </Text>
            </View>
            <View style={{borderBottomWidth: 2, borderColor: '#27C4CC', flexDirection: "row", alignItems: 'center', paddingLeft: 20}}>
                <Image
                    source={require('../../app/assets/icons/food.png')}
                    style={{width: 25*rem, height: 31 *rem}}
                />
                <Text style={styles.subHeader}>Food & Drinks</Text>
            </View>
            <View style={styles.entryBox}>
                <Text> Nothing here yet! </Text>
            </View>
        </ScrollView>
        </View>
    );
  }
}

export default Favorites;