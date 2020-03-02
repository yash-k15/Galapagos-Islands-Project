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

class Rules extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <ScrollView>
            <Text>Rules Screen</Text>
              <Text>To visit the National Park you must always be accompanied by a certified Guide of the Galapagos National Park. Galapagos is a unique and fragile environment. Please you can only take pictures and video. Professional photographers need authorization from the National Park. Please remain within the limits of the walking trails, for your safety and that of the flora and fauna. To avoid affecting the natural behavior of wildlife, please avoid being more than 2 meters from the animals. Camping is only allowed in specific places. If you want to camp, you must first obtain a permit from the Galapagos National Park. Conservation aid through cooperation with the authorities in their inspection, monitoring and control mission. Report of any anomaly to the National Park. Do not introduce foreign organisms to the islands since they can have a negative impact on the ecosystem. Please do not buy souvenirs that are made of black coral, sea shells, sea lion teeth, turtle shell, volcanic stone or endemic woods. Galapagos animals have their own feeding behavior. Never feed the animals. Feeding them can be harmful to your health. The landscapes of Galapagos are beautiful and unique. Do not spoil them by writing or burning rocks or trees. Do not litter while on the islands. Always deposit trash in a safe and appropriate manner. Smoking or making fires in national park areas is prohibited and can cause devastating fires. Fishing is strictly prohibited, except in those vessels specifically authorized by the Galapagos National Park for that sole purpose. Jet Ski, submarines, water skiing and air tourism are prohibited.</Text>
          </ScrollView>
      </View>
    );
  }
}

export default Rules;