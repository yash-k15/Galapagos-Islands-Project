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
        <Text>Learn Screen</Text>
        <Button
          title="About Us"
          onPress={() => this.props.navigation.navigate("AboutUs")}
        />
          <Button
              title="Science & Sustainability"
              onPress={() => this.props.navigation.navigate("SciAndSus")}
          />
          <Button
              title="History"
              onPress={() => this.props.navigation.navigate("History")}
          />
      </View>
    );
  }
}

export default Learn;