import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions,} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

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
    }
});

class KnowBefore extends React.Component {
  render(){
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
          <View style={styles.header}>
                <Image
                    source={require('../../../app/assets/icons/plan.png')}
                    style={{width: 28*rem, height: 31*rem}}
                />
              <Text style={styles.headerText}>Know Before You Go</Text>
          </View>
          <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate("Language")}>
              <View style={styles.buttonLeft}>
                    <Image
                        source={require('../../../app/assets/icons/topActivities_gray.png')}
                        style={{width: 30*rem, height: 30*rem}}
                    />                  
                    <Text style={styles.buttonText}>Language</Text>
              </View>
              <View style={styles.buttonRight}>
                    <Image
                        source={require('../../../app/assets/icons/chevron.png')}
                        style={styles.chevron}
                    />                
                </View>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate("Customs")}>
              <View style={styles.buttonLeft}>
                    <Image
                        source={require('../../../app/assets/icons/island_gray.png')}
                        style={{width: 27*rem, height: 31*rem}}
                    />                   
                    <Text style={styles.buttonText}>Cultural & Social Norms</Text>
              </View>
              <View style={styles.buttonRight}>
                    <Image
                        source={require('../../../app/assets/icons/chevron.png')}
                        style={styles.chevron}
                    />                   
                </View>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate("Rules")}>
              <View style={styles.buttonLeft}>
                    <Image
                        source={require('../../../app/assets/icons/island_gray.png')}
                        style={{width: 27*rem, height: 31*rem}}
                    />                   
                    <Text style={styles.buttonText}>Rules of the National Park</Text>
              </View>
              <View style={styles.buttonRight}>
                    <Image
                        source={require('../../../app/assets/icons/chevron.png')}
                        style={styles.chevron}
                    />                   
                </View>
          </TouchableOpacity>
          <Text>Internet & Connectivity</Text>
              <Text>Internet connection can be obtained in all places of accommodation / restaurants. The internet in
                  Puerto Ayora is satellite, therefore we do not have a fiber optic connection which can make it
                  slow.</Text>
              <Text>Have an Emergency?</Text>
              <Text>911</Text>
      </View>
    );
  }
}
export default KnowBefore;