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

class People extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
            <Text>People</Text>
            <Text>The history of the colonization of the Galapagos goes back to the middle of the 17th century,
                with the arrival of the first pirates who used the islands as a refuge; subsequently the Norwegians
                settled on the islands promoting human settlements. Tourism, artisanal fishing, agriculture and
                handicrafts are today the main sources of life for the Galapagos populations. Around 30,000 people
                inhabit the set of the five populated islands: San Cristóbal, Santa Cruz, Isabela, Floreana and Baltra.
                Tourism is the basis of the local economy and its main source of income. The archipelago currently receives
                175,000 visitors a year. The second economic activity is artisanal fishing, the fishing sector is the most
                involved in the management of the Marine Reserve. Artisanal fishermen represent an important group in the
                economy. In recent years, the artisanal ability of the island's inhabitants has developed significantly;
                The use of recycled materials, t-shirt painting and wood carving is unique. Agricultural activities in the
                islands are not very technical, natural products grown organically are brought from the humid areas of the
                upper parts of the archipelago to be consumed in the ports. The music in Galapagos stands out for
                having happy rhythms with lyrics that talk about the daily life of the inhabitants of Galapagos.</Text>
        </ScrollView>
      </View>
    );
  }
}

export default People;