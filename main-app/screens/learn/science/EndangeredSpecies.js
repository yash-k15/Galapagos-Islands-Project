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

class EndangeredSpecies extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <ScrollView>
            <Text>Endangered Species Screen</Text>
            <Text>PICTURES SLIDE HERE</Text>
            <Text>The causes of this phenomenon are diverse, ranging from illegal hunting, the introduction of alien
                species to the islands, the unconsciousness of certain tourists and inhabitants of the area, to climate
                change that generates harmful variations in the levels of oxygen and other gases at the bottom of
                the sea.</Text>
          </ScrollView>
      </View>
    );
  }
}

export default EndangeredSpecies;