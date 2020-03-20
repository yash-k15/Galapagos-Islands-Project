import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Button, Text, View, ScrollView } from 'react-native';

const styles = StyleSheet.create ({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  }
});

class Transport extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <Text>Camping</Text>
          <ScrollView>
            <Text>There are several places where you can camp with prior written authorization from the PNG Directorate, in Santa Cruz, San Cristóbal and Isabela.</Text>
          </ScrollView>
      </View>
    );
  }
}

export default Transport;