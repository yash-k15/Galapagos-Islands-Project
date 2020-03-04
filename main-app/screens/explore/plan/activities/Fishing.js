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

class Fishing extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <Text>Fishing</Text>
          <ScrollView>
              <Text>Sport fishing is prohibited in Galapagos until it can be carefully determined that it can be done sustainably. However, one of the possibilities being explored is known as "Experiential Fishing" or demonstration fishing. The artisanal fishermen of Galapagos will be able to offer the experience fishing service to the tourists of the archipelago. This combines traditional skills with tourism, and using “experiential fishing” can help fishermen's families, whose income is affected by the consequences of overfishing and also by the Special Law, maintain their livelihoods.</Text>
          </ScrollView>
      </View>
    );
  }
}

export default Fishing;