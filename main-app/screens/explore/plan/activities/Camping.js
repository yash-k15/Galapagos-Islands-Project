import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, ScrollView, Dimensions} from 'react-native';

const entireScreenWidth = Dimensions.get('window').width;
let rem;
rem = entireScreenWidth / 350;


const styles = StyleSheet.create ({
    header:{
        flexDirection: 'row',
        paddingVertical: 16,
        paddingLeft: 34,
        alignItems: 'center'
    },
    headerText: {
        paddingLeft: 16,
        fontSize: 34*rem,
        fontWeight: '600'
    },
    bodyContainer:{
        paddingHorizontal: 33*rem,
        paddingBottom: 52*rem
    },
    bodyText:{
        fontSize: 17*rem,
        lineHeight: 23*rem,
        color: '#616161'

    }
});

class Camping extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <View style={styles.header}>
             <Text style={styles.headerText}>Camping</Text>
          </View>
          <ScrollView>
              <View style={styles.bodyContainer}>
                <Text styles={styles.bodyText}>There are several places where you can camp with prior written authorization from the PNG Directorate, in Santa Cruz, San Cristóbal and Isabela.</Text>
              </View>
          </ScrollView>
      </View>
    );
  }
}

export default Camping;