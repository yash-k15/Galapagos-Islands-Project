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

class Protect extends React.Component {
    render(){
        return (
              <View style={styles.container}>
                  <ScrollView>
                    <Text>How to Protect</Text>
                    <Text>There are currently several people, institutions and initiatives that seek to protect the
                        flora and fauna of the Galapagos. Many of these plans need the commitment and effort of people,
                        especially those who live in the archipelago. One of these ideas is to commit government
                        institutions to carry out a stricter control in the entrance and exit channels of exotic
                        species, since not only the introduced animals represent a danger, but those that leave
                        illegally, mocking the airport controls. Regarding the species already introduced,
                        ideas have been proposed to reforest with endemic species, through agreements with farmers
                        in the area and, in addition, to put into practice a type of organic and friendly cultivation
                        with the ecosystem of the islands. Another alternative that is being applied is to empower the
                        inhabitants of the islands so that they are the main guardians of the endemic species, animals
                        and plants, of the different areas of Galapagos. A sustainable economy and production project
                        is already running, in which organic matter is being processed to market organic,
                        environmentally friendly organic products. On the other hand, artisanal fishing is
                        gaining ground, which is intended to end illegal hunting. And, in 2018, it was closed with the
                        approval of the law prohibiting the use of disposable plastics, especially t-shirt covers, in
                        all the Galapagos Islands. These measures and initiatives seek to recover ecosystems and
                        preserve the flora and fauna of the Galapagos Islands. </Text>
                </ScrollView>
              </View>
        );
    }
}

export default Protect;