import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

const styles = StyleSheet.create ({
    title: {
        textAlign:'left'
    },
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  }
});

class AboutUs extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Learn Screen</Text>
      </View>
    );
  }
}

export default AboutUs;