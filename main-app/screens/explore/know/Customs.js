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

class Customs extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <ScrollView>
            <Text>Cultural & Social Customs Screen</Text>
          </ScrollView>
      </View>
    );
  }
}

export default Customs;