import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

const styles = StyleSheet.create ({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  }
});

class Language extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Language Screen</Text>
      </View>
    );
  }
}

export default Language;