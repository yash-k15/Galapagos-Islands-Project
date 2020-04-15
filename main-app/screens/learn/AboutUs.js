import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions,ScrollView} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

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
    }
});

class AboutUs extends React.Component {
  render(){
    return (
        <ScrollView style={styles.container}>
      <View>
        <View style={styles.header}>
            <Image
                source={require('../../app/assets/icons/aboutUs.png')}
                style={{width: 34*rem, height: 27*rem}}
            />
            <Text style={styles.headerText}>About Us</Text>
        </View>
        <Image
            source={require('../../app/assets/images/headerImage_short.png')}
            style={{width: entireScreenWidth, height: 25*rem}}
        />
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("Language")}>
            <View style={styles.buttonLeft}>
                <Image
                    source={require('../../app/assets/icons/alphabet_gray.png')}
                    style={{width: 32*rem, height: 25*rem}}
                />                  
                <Text style={styles.buttonText}>Language</Text>
            </View>
            <View style={styles.buttonRight}>
                <Image
                    source={require('../../app/assets/icons/chevron.png')}
                    style={styles.chevron}
                />                
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.lastButtonContainer}
            onPress={() => this.props.navigation.navigate("Customs")}>
            <View style={styles.buttonLeft}>
                <Image
                    source={require('../../app/assets/icons/galap.png')}
                    style={{width: 29*rem, height: 29*rem}}
                />                   
                <Text style={styles.buttonText}>Cultural & Social Norms</Text>
            </View>
            <View style={styles.buttonRight}>
                <Image
                    source={require('../../app/assets/icons/chevron.png')}
                    style={styles.chevron}
                />                   
            </View>
        </TouchableOpacity>
            <Text style={styles.bodyText}>The Provincial Chamber of Tourism of Galapagos CAPTURGAL, is a non-profit organization created in 1996 (Ministerial Agreement No. 0013).{"\n\n"}

With its main office in Puerto Ayora, on the island of Santa Cruz, with its respective Chapters of San Cristóbal, it serves its almost 100 associates of the four inhabited islands of the archipelago (Floreana Island is a parish of the San Cristóbal Municipal Government), a who provides services in the fields of legal and technical advice, arbitration, training and business references.{"\n\n"}

In fulfilling its functions, CAPTURGAL takes positive measures to ensure the conservation of these extraordinary islands. Since its foundation, CAPTURGAL has worked determinedly and jointly with the Galapagos National Park in order to promote tourism, without causing any damage to these unique ecosystems.{"\n\n"}

But CAPTURGAL's job is also to take care of the Galapagos visitors, their comfort, their safety, their well-being. In a word: offer them quality.{"\n\n"}

The Provincial Chamber of Tourism of Galapagos is at your service, to make your visit to these enchanted islands unforgettable.{"\n\n"}

Therefore, just enjoy it!

            </Text>
    </View>
    </ScrollView>
    );
  }
}
export default AboutUs;