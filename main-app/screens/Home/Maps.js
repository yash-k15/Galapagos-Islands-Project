import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions,ScrollView, ImageBackground} from 'react-native';

//get scaling factors
const entireScreenWidth = Dimensions.get('window').width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create ({
    container:{
        backgroundColor: '#fff',
        flex: 1
    },
    header:{
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 34,
        alignItems: 'center'
    },
    headerText: {
        paddingLeft: 16,
        fontSize: 28*rem,
        fontWeight: "600"
    },
    buttonText:{
        fontSize: 17*rem,
        paddingLeft: 16
    },
    buttonContainer:{
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#C0C0C0',
        paddingVertical: 10,
        paddingLeft: 34,
        paddingRight: 14
    },
    lastButtonContainer:{
        flexDirection: 'row',
        borderTopWidth: 1,
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
        alignItems: 'center',
    }, 
    chevron:{
        width: 11*rem, 
        height: 18*rem
    },
    subHeader:{
      fontWeight: '600',
      color: '#000000',
      fontSize: 17*rem,
      paddingLeft: 34,
      paddingTop: 16, 
      paddingBottom: 16
    },
    bodyText:{
        fontSize: 17*rem,
        color: '#616161',
        padding: 34,
        lineHeight: 22 * rem,
    },
    dropHeader: {
        backgroundColor: 'rgba(39, 196, 204, 0.1)',
        height: 50*rem,
    },
    dropHeaderText: {
        fontSize: 17*rem,
        paddingLeft: 16,
        fontWeight: 'bold'
    },
    dropBodyText: {
        fontSize: 17*rem,
        color: '#616161',
        lineHeight: 22 * rem,
        paddingLeft: 16
    }
});

class Maps extends React.Component {
    
  render(){
    return (
        <ScrollView style={styles.container}>
     <View>
        <View style={styles.header}>
            <Image
                source={require('../../app/assets/icons/Map.png')}
                style={{width: 34*rem, height: 27*rem}}
            />
            <Text style={styles.headerText}>Maps</Text>
        </View>
        <Image
            source={require('../../app/assets/images/headerImage_short.png')}
            style={{width: entireScreenWidth, height: 25*rem}}
        />
        
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("fullGalapago")}>
            <View style={styles.buttonLeft}>
                <ImageBackground
                    source={require('../../app/assets/icons/Map.png')}
                    style={{width: 31*rem, height: 25*rem}}
                />
                <Text style={styles.buttonText}>Galapagos Islands</Text>
            </View>
            <View style={styles.buttonRight}>
                <Image
                    source={require('../../app/assets/icons/chevron.png')}
                    style={styles.chevron}
                />
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("SantaCruzI")}>
            <View style={styles.buttonLeft}>
                <ImageBackground
                    source={require('../../app/assets/icons/Map.png')}
                    style={{width: 31*rem, height: 25*rem}}
                />
                <Text style={styles.buttonText}>Santa Cruz Island</Text>
            </View>
            <View style={styles.buttonRight}>
                <Image
                    source={require('../../app/assets/icons/chevron.png')}
                    style={styles.chevron}
                />
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("Isabella")}>
            <View style={styles.buttonLeft}>
                <ImageBackground
                    source={require('../../app/assets/icons/Map.png')}
                    style={{width: 31*rem, height: 25*rem}}
                />
                <Text style={styles.buttonText}>Isabela Island</Text>
            </View>
            <View style={styles.buttonRight}>
                <Image
                    source={require('../../app/assets/icons/chevron.png')}
                    style={styles.chevron}
                />
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("SanCristobal")}>
            <View style={styles.buttonLeft}>
                <ImageBackground
                    source={require('../../app/assets/icons/Map.png')}
                    style={{width: 31*rem, height: 25*rem}}
                />
                <Text style={styles.buttonText}>San Cristobal Island</Text>
            </View>
            <View style={styles.buttonRight}>
                <Image
                    source={require('../../app/assets/icons/chevron.png')}
                    style={styles.chevron}
                />
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("Floreana")}>
            <View style={styles.buttonLeft}>
                <ImageBackground
                    source={require('../../app/assets/icons/Map.png')}
                    style={{width: 31*rem, height: 25*rem}}
                />
                <Text style={styles.buttonText}>Floreana Island</Text>
            </View>
            <View style={styles.buttonRight}>
                <Image
                    source={require('../../app/assets/icons/chevron.png')}
                    style={styles.chevron}
                />
            </View>
        </TouchableOpacity>
    </View>
    </ScrollView>
    );
  }
}
export default Maps;