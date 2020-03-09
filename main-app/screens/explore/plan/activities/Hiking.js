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

class Hiking extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <Text>Hiking</Text>
          <ScrollView>
              <Text>On Santa Cruz Island there are some good places for hiking such as the trails to Las Grietas, Tortuga Bay or Playa del Garrapatero in the coastal area. In the upper part there are good options to choose from. A trail starts from the town of Bellavista (7 Km. From Puerto Ayora) that will guide you through farm areas, border of the Galapagos National Park, Miconia area and leads you to the highest hills of the island: Media Luna, Puntudo and Cerro Crocker. The distance from Bellavista to Media Luna is 5 km and from there to Puntudo and Crocker Hill about 3 km. If you wish, you can make the journey by bicycle or arrange with a taxi driver to take you most of the way, from that so you will only walk a kilometer from the parking lot to the Half Moon booth. Here you can find birds like Darwin and pachay finches, surrounded by endemic flora of the island that is not found on another island. Try not to disturb the nests of the Galapagos petrels or glued leg, a nocturnal seabird that only nests in this place. The hike is recommended only when the weather is good, during the rainy season the trails are very wet and slippery. In Isabela there are several paths for trekking, starting with the beautiful 3 km long white sand beach. There are roads through Puerto Villamil, the Wetlands and in the upper part. San Cristóbal also has beautiful places; Thus we have La Lobería and Mann Beach, Cerro Tijeretas and the Interpretation Center. In the upper part you can visit La Galapaguera of Cerro Colorado and combine this excursion with a visit to the viewpoint of Cerro Colorado and enjoy the beach of Puerto Chino. Seabirds, marine iguanas, giant turtles in semi-natural conditions and the rare Calandrinia, a Galapagos endemic plant restricted to Zero Colorado, are some of the many attractions you will find.</Text>
          </ScrollView>
      </View>
    );
  }
}

export default Hiking;