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

class ScienceAndSus extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <ScrollView>
            <Text>Science & Sustainability Screen</Text>
              <Text>Flora & Fauna</Text>
            <Button
              title="Flora"
              onPress={() => this.props.navigation.navigate("Flora")}
            />
              <Button
                  title="Fauna"
                  onPress={() => this.props.navigation.navigate("Fauna")}
              />
              <Button
                  title="How to Protect Them"
                  onPress={() => this.props.navigation.navigate("Protect")}
              />
              <Text>Species</Text>
              <Button
              title="Endangered Species"
              onPress={() => this.props.navigation.navigate("EndangeredSpecies")}
             />
              <Button
                  title="New Species"
                  onPress={() => this.props.navigation.navigate("NewSpecies")}
              />

        </ScrollView>
      </View>
    );
  }
}

export default ScienceAndSus;