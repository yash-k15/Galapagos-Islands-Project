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

class Cycling extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <Text>Cycling</Text>
          <ScrollView>
            <Text>Santa Cruz Island</Text>
            <Text>The only paved road begins in Puerto Ayora and crosses the island to the Itabaca Canal located in front of Baltra Island, it is approximately 41 km. The nearest town is Bellavista located 7 km from Puerto Ayora, from there 13 km away Find Santa Rosa. There is a dirt road behind the Tomás de Berlanga school 4.5 km from Puerto Ayora, which will direct you to Bellavista. From there you continue to the right and you will find two roads, one for the population of El Camote and one for El Cascajo; If you continue along this path you will end up in the parking lot of Playa del Garrapatero. There are two dirt trails along the Santa Rosa sector, the first one is located to the left of the Santa Rosa Colosseum, this will guide you through farms that giant torgugas frequent and are easy to find. The second path is continuing straight through the entrance to Santa Rosa, and will lead you to the town of Salasaca, where you can visit the tourist farms that have lava tunnels and turtles in their natural state. Consider renting a taxi to get to the furthest place and then get off by bike.</Text>
            <Text>San Cristobal Island</Text>
            <Text>In San Cristóbal, cycling as a tourist activity takes place in the upper part, choose between renting a bicycle or going on a guided tour, follow the signs located along the road. On the route that leads to El Progreso, the road is paved, henceforth the road is weighed until we reach the site called El Junco. Another option is already in Progress take "Y" (left lane), to school. Continue to the top of Cerro Soledad where there is a viewpoint from which you can observe the landscapes of San Cristóbal.</Text>
            <Text>Isabela Island</Text>
              <Text>In Isabela, renting a bicycle is a good way to get to know the upper part - a little known area of Galapagos. Going through the facilities of the original settlers of the island and visiting farms gives the visitor the opportunity to learn about the history and culture of the Isabeleños. You can also visit the Wetlands and the Wall of Tears by bicycle. The low vehicular traffic on the island ensures a calm and peaceful day.</Text>
          </ScrollView>
      </View>
    );
  }
}

export default Cycling;