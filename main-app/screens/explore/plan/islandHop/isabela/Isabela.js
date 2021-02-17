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

class Isabela extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <Text>Island Hop</Text>
          <Text>Isabela Island</Text>
            <ScrollView>
                <Text>WEATHER TAB HERE</Text>
                <Text>What to Do</Text>
                <Button
                  title="Top Activities"
                  onPress={() => this.props.navigation.navigate("IsabelaTop")}
                />
                <Text>Eat & Drink </Text>
                <Button
                    title="Food & Drinks"
                    onPress={() => this.props.navigation.navigate("IsabelaFood")}
                />
                <Text>Plan Ahead</Text>
                <Button
                    title="Hotels"
                    onPress={() => this.props.navigation.navigate("IsabelaHotels")}
                />
            </ScrollView>
      </View>
    );
  }
}

export default Isabela;