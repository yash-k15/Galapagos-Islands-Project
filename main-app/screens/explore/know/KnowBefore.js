import 'react-native-gesture-handler';
import * as React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
} from 'react-native'

const styles = StyleSheet.create ({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  }
});

class KnowBefore extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <ScrollView>
            <Text>Explore Screen</Text>
            <Button
              title="Language"
              onPress={() => this.props.navigation.navigate("Language")}
            />
              <Button
                  title="Cultural & Social Customs"
                  onPress={() => this.props.navigation.navigate("Customs")}
              />
              <Button
                  title="Rules of the National Park"
                  onPress={() => this.props.navigation.navigate("Rules")}
              />
              <Text>Internet & Connectivity</Text>
              <Text>Internet connection can be obtained in all places of accommodation / restaurants. The internet in
                  Puerto Ayora is satellite, therefore we do not have a fiber optic connection which can make it
                  slow.</Text>
              <Text>Have an Emergency?</Text>
              <Text>911</Text>
          </ScrollView>
      </View>
    );
  }
}

export default KnowBefore;