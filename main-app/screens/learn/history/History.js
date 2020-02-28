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

class History extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
        <Button
          title="Timeline"
          onPress={() => this.props.navigation.navigate("Timeline")}
        />
        <Button
            title="People"
            onPress={() => this.props.navigation.navigate("People")}
        />
        <Text> Natural History </Text>
        <Text>The Galapagos Islands constitute one of the most complex, diverse and unique oceanic archipelagos in the
            world, which still maintains its ecosystems and biodiversity without major alterations. Its location and
            geographical isolation, its biological richness and the evolutionary processes reflected in its unique fauna
            and flora, have earned them worldwide recognition. The Galapagos Islands are located on the equatorial line
            of the Pacific Ocean, 1000 km west of the Continental Ecuador and consists of 13 major islands, 6 minor
            islands and more than 107 islets and rocks. The islands maintain several habitats with their own
            characteristics, which are shelters for food and reproduction of different land and marine animals.
            Galapagos is a geologically active area, where formations such as the Alcedo volcano or the
            Sierra Negra are some of the most interesting natural attractions of the archipelago.
            Sierra Negra has the second largest boiler in the world. The Cerro Azul Volcano recorded a last
            eruption in 1998. The total area of ​​the islands covers 7,882 km2 spread over approximately 45,000
            km2 of sea. The marine floor of the eastern South Pacific has an extraordinary topography: mountains,
            summits, plateaus and valleys that house a wide variety of marine species; The islands of the archipelago
            are the surface tips of huge volcanoes.</Text>
        </ScrollView>
      </View>
    );
  }
}

export default History;