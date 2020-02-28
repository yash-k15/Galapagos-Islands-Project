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

class Timeline extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <ScrollView>
            <Text>Timeline Screen</Text>
            <Text>1535</Text>
            <Text> Fray Tomás de Berlanga discovers the Galapagos Islands.</Text>
            <Text>1832</Text>
            <Text>The Republic of Ecuador, takes official possession of Galapagos.</Text>
            <Text>The boat “H.M.S. BEAGLE ”arrives in Galapagos after an exploration tour around the world.
                On board, was the young naturalist Charles Darwin who within the islands would deduce his revolutionary
                Theory of the Evolution of Species, published in November 1859.</Text>
            <Text>1934</Text>
            <Text>The first laws of protection of the islands are promulgated.</Text>
            <Text>1959</Text>
            <Text>The Galapagos Islands are declared National Park.</Text>
            <Text>1968</Text>
            <Text>For the protection of the biodiversity of the islands, the Galapagos National Park Service is
                created. The Galapagos Islands are part of the National System of Protected Areas of Ecuador due to the
                Forestry and Wildlife Conservation Law, promulgated in 1981. Of the 7,882 km2 of the land area of
                the archipelago, 97% constitutes the Galapagos National Park and the remaining 3%
                is destined to human settlements.</Text>
            <Text>1979</Text>
            <Text>UNESCO declared the Galapagos Islands a World Heritage Site.</Text>
            <Text>MORE YEARS TO BE INSERTED</Text>
          </ScrollView>
      </View>
  );
  }
}

export default Timeline;