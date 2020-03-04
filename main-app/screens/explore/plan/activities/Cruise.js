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

class Cruise extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <Text>Cruise</Text>
          <ScrollView>
              <Text>The Galapagos Islands are located in the Pacific Ocean, about 1000 km off the coast of Ecuador. A cruise is the best way to visit many of the islands in a short time. Taking a boat tour will allow you to know the farthest islands, and will always be accompanied by a professional naturalist guide who will teach you the unique geology, flora, fauna and history of each island.</Text>
              <Text>The circuits have a duration of 4, 5 and 8 days. There is a wide range of yachts and boats that offer cruises on the Galapagos Islands. Most boats have snorkeling and kayaking equipment, some yachts also offer diving. Due to the type of service they offer, the training of their staff, the gastronomic offer, the equipment and service on board, in the Galapagos Islands, 4 classes of boats and yachts are distinguished: economy class, tourist class, first class and luxury class .</Text>
              <Text>Economy Class Yachts</Text>
              <Text>Small yachts (8 to 16 passengers) Basic equipment Small spaces on board Narrow cabins with bunk beds Limited food options Limited cruise speed Long sailing time Limited itineraries</Text>
              <Text>Tourist</Text>
              <Text>Better equipped (10 to 18 passengers) More spacious Bathrooms and showers in the cabins Social areas Air conditioning option Quality service and itinerary offers Naturalist Guides II with mastery of a foreign language Some offer diving </Text>
              <Text>First Class Yachts</Text>
              <Text>Extensive itineraries around the islands Undergo international maritime safety regulations Spacious cabins Hot and cold water Air conditioning Buffet-style food Variety and assorted bar Naturalist guides III (highest category in Galapagos) specialized with deep knowledge of the flora and fauna of the Galapagos that speak two or three foreign languages Snorkeling equipment Sea kayaking </Text>
                <Text>Luxury Yachts</Text>
              <Text>Comfortable and elegant cabins First class service Highly qualified professional team Best routes in Galapagos Satellite communication Video Souvenir shops Jacuzzi Buffet food Minibar in the cabins Air conditioning </Text>
          </ScrollView>
      </View>
    );
  }
}

export default Cruise;