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

class Learn extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Favorites</Text>
      </View>
    );
  }
}

export default Learn;