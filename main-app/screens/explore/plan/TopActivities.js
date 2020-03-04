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

class TopActivities extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <Text>Top Activities</Text>
          <ScrollView>
              <Text>Land</Text>
            <Button
              title="Cycling"
              onPress={() => this.props.navigation.navigate("Cycling")}
            />
            <Button
              title="Camping"
              onPress={() => this.props.navigation.navigate("Camping")}
            />
            <Button
              title="Hiking"
              onPress={() => this.props.navigation.navigate("Hiking")}
            />
              <Text>Sea</Text>
            <Button
                title="Cruise"
                onPress={() => this.props.navigation.navigate("Cruise")}
            />
            <Button
              title="Diving"
              onPress={() => this.props.navigation.navigate("Diving")}
          />
          <Button
              title="Surfing"
              onPress={() => this.props.navigation.navigate("Surfing")}
          />
          <Button
              title="Kayaking"
              onPress={() => this.props.navigation.navigate("Kayaking")}
          />
          <Button
              title="Fishing"
              onPress={() => this.props.navigation.navigate("Fishing")}
          />
          </ScrollView>
      </View>
    );
  }
}

export default TopActivities;