import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions,} from 'react-native';

//get scaling factors
const entireScreenWidth = Dimensions.get('window').width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create ({
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
    regularBold:{
        fontWeight: '600',
        color: '#000000',
        fontSize: 17*rem,
        paddingLeft: 34,
        paddingTop: 16, 
        paddingBottom: 16
    },
    regular:{
      fontSize: 17*rem,
      color: '#616161',
      paddingLeft: 34,
      lineHeight: 20 * rem
    }
});

class Customs extends React.Component {
  render(){
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={styles.header}>
            <Image
                source={require('../../../app/assets/icons/plan.png')}
                style={{width: 28*rem, height: 31*rem}}
            />
            <Text style={styles.headerText}>Cultural & Social Customs</Text>
        </View>
        <Image
            source={require('../../../app/assets/images/headerImage_short.png')}
            style={{width: entireScreenWidth, height: 25*rem}}
        />
      </View>      
        
    );
  }
}
export default Customs;