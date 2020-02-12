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

class Learn extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Learn Screen</Text>
        <Button
          title="Go to Explore"
          onPress={() => this.props.navigation.navigate("Explore")}
        />
      </View>
    );
  }
}

export default Learn;