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

class Kayaking extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <Text>Kayaking</Text>
          <ScrollView>
              <Text>Kayaking, windsurfing and surfing are all activities allowed within the limits of the Galapagos Marine Reserve. One of the ways to be in greater contact with the tranquility of nature is to practice kayaking. Santa Cruz has fabulous places to do this activity. From the Itabaca Canal on the north side of the island, you can go on an adventure, watching sea turtles, blue-footed boobies, seagulls and pelicans. Also make trips from Puerto Ayora to Punta Estrada. A small beach easily affordable at high tide. Then you can paddle to the Tintoreras Canal and the Canal del Amor, where wildlife and fantastic landscapes await you. In Puerto Ayora there are some Travel Agencies that offer tours, with guide included, to different places. In Isabela there is also a perfect environment for kayaking. You can rent kayak and stroll along the sea to the sites of visit Las Tintoreras and Concha de Perla. Rowing through the coastal area of ​​Isabela Island offers visitors greater contact with nature where you can see whitefin sharks, sea lions and various bird species.</Text>
          </ScrollView>
      </View>
    );
  }
}

export default Kayaking;