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

class Flora extends React.Component {
    render(){
    return (
      <View style={styles.container}>
          <ScrollView>
             <Text>Flora Screen</Text>
              <Text>Scientifically, it is known that the Galapagos flora has managed to grow thanks to the winds, the
                  transport of the seeds in the legs and digestive tract of the animals, and through floating rafts that
                  came from the rivers to the sea. It should be clarified that not all seeds were suitable for all types
                  of soils, so they germinated in the different vegetation zones to which they best adapted. Now let's
                  talk about each of these areas to get an idea of the flora that grows in the Galapagos.</Text>
              <Text>Coastal Zone</Text>
              <Text>The coastal zone is characterized by its high saline level, so the local plants can withstand these
                  hypersaline conditions. The most representative are the Monte Salado, the Red Mangrove and the Morning
                  Glory. </Text>
              <Text>Arid Zone</Text>
              <Text>In the arid zone we find the three species of cactus on the islands: Opuntia, Candelabra and Lava,
                  which provide food for iguanas and land turtles.</Text>
              <Text>Humid Zone</Text>
              <Text>In the humid zone we find a microclimate very similar to that of the cloud forests, and that has
                  created great distance with the arid zone. This area has ferns, orchids, moss, lichen, cat's claw and
                  other plants. </Text>
          </ScrollView>
      </View>
    );
    }
}

export default Flora;