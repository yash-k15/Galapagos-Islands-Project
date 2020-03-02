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

class Explore extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Explore Screen</Text>
        <Button
          title="Know Before You Go"
          onPress={() => this.props.navigation.navigate("KnowBefore")}
        />
          <Button
              title="Plan Your Trip"
              onPress={() => this.props.navigation.navigate("Plan")}
          />
      </View>
    );
  }
}

export default Explore;