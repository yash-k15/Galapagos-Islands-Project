import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
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
        fontSize: 34*rem,
        fontWeight: "600"
    },
    buttonText:{
        fontSize: 17*rem,
        paddingLeft: 16
    },
    buttonContainer:{
        flexDirection: 'row',
        borderWidth: 1,
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
        alignItems: 'center',
    }
});

class Plan extends React.Component {
  render(){
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
          <View style={styles.header}>
              <Ionicons name="ios-book" size={32} color="green" />
              <Text style={styles.headerText}>Plan Your Trip</Text>
          </View>
          <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate("TopActivities")}>
              <View style={styles.buttonLeft}>
                  <Ionicons name="ios-book" size={32} color="green" />
                  <Text style={styles.buttonText}>Top Activities</Text>
              </View>
              <View style={styles.buttonRight}>
                  <Ionicons name="ios-book" size={32} color="green" />
              </View>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.lastButtonContainer}
              onPress={() => this.props.navigation.navigate("IslandHop")}>
              <View style={styles.buttonLeft}>
                  <Ionicons name="ios-book" size={32} color="green" />
                  <Text style={styles.buttonText}>Island Hop</Text>
              </View>
              <View style={styles.buttonRight}>
                  <Ionicons name="ios-book" size={32} color="green" />
              </View>
          </TouchableOpacity>
      </View>
    );
  }
}
export default Plan;