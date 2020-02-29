import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Button, Text, View, ScrollView } from 'react-native';
import {SceneView} from "react-navigation";


const styles = StyleSheet.create ({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  }
});

class Fauna extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
            <Text>Fauna</Text>
            <Text>There are 7214 species identified in Galapagos; It is estimated that up to 86% of the biodiversity
                described would already be inventoried. 30.8% of the Galapagos species are endemic (native) to the
                islands. Vertebrate animals comprise 696 species, 10% of the island's biodiversity. Terrestrial
                and freshwater invertebrates represent 32% of terrestrial biodiversity. Currently, marine invertebrates
                represent 31% of marine biodiversity (note: these data are estimates as of 2001 and are in constant
                variation). The Galapagos Marine Reserve is the second largest in surface and the only open water in
                the world. The biomass of its waters is surprisingly rich by the cold water currents that emerge in
                this sector, without doubt the waters of the archipelago have an interesting marine fauna that remains
                to be known. For this reason, the scientific research of the Technical Department of the Galapagos
                National Park focuses on the study of marine biodiversity. The new technologies allow to go down
                to great depths to observe and collect samples of underwater ecosystems of which we know very little.
                Numerous scientific research favors the discovery of the amazing nature of Galapagos. </Text>
        </ScrollView>
      </View>
    );
  }
}

export default Fauna;