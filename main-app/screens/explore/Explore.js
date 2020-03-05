import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create ({
    header: {
        fontSize: 50,
        paddingTop: 10,
        paddingBottom: 20
    },
    buttonContainer:{
        flexDirection: 'row', borderWidth: 1, paddingVertical: 10
    },
    lastButtonContainer:{
        flexDirection: 'row', borderBottomWidth: 1, paddingVertical: 10
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


class Explore extends React.Component {
  render(){
    return (
      <View>
        <Text style={styles.header}>Explore</Text>
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("KnowBefore")}>
            <View style={styles.buttonLeft}>
                <Ionicons name="ios-book" size={32} color="green" />
                <Text style={{fontWeight: "bold"}}>Know Before You Go</Text>
            </View>
            <View style={styles.buttonRight}>
                <Ionicons name="ios-book" size={32} color="green" />
            </View>
        </TouchableOpacity>
          <TouchableOpacity
              style={styles.lastButtonContainer}
              onPress={() => this.props.navigation.navigate("Plan")}>
              <View style={styles.buttonLeft}>
                  <Ionicons name="ios-book" size={32} color="green" />
                  <Text style={{fontWeight: "bold"}}>Plan Your Trip</Text>
              </View>
              <View style={styles.buttonRight}>
                 <Ionicons name="ios-book" size={32} color="green" />
              </View>
          </TouchableOpacity>
      </View>
    );
  }
}

export default Explore;