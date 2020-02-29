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

class NewSpecies extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <ScrollView>
            <Text>New Species Screen</Text>
            <Text>We have made a small tour of the flora and fauna of the Galapagos, but that does not mean that
                there are no more species or that all have already been discovered. In fact, since 2009 they have
                been discovering more animal and plant species. Among the ten species discovered, we find two new
                species of fish: Scorpaenodes sp and Gobiomuros sp. In the Wolf volcano, what scientists describe
                as a "living fossil" was discovered: the pink iguana. Under the sea, in 2012, a new species of cat
                shark was discovered: Bythaelurus giddingsi, barely thirty centimeters in length. On the other hand,
                three species of corals were found, one of them was believed extinct, but survived the El Niño
                phenomenon. The lichens added to their family ten new species and the finches have a new companion,
                which despite being discovered twenty years ago, in 2009 it was registered as a new species. In 2018,
                scientists from Brazil and Ecuador found three new species of snakes. These findings and the species
                already known before, show us that the Galapagos Islands are a living laboratory and that, although
                their species have evolved and developed in inhospitable environments, their ecosystems are fragile.</Text>
          </ScrollView>
      </View>
    );
  }
}

export default NewSpecies;