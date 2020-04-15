import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, ScrollView, Dimensions, Image} from 'react-native';

const entireScreenWidth = Dimensions.get('window').width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    header:{
        flexDirection: 'row',
        paddingVertical: 16,
        paddingLeft: 34,
        alignItems: 'center'
    },
    headerText: {
        paddingLeft: 16,
        fontSize: 34*rem,
        fontWeight: '600'
    },
    bodyContainer:{
        paddingVertical: 36*rem,
        paddingHorizontal: 33*rem,
        paddingBottom: 52*rem
    },
    subHeader:{
        fontWeight: '600',
        color: '#000000',
        fontSize: 17*rem,
        paddingLeft: 34,
        paddingTop: 16,
        paddingBottom: 16
    },
    bodyText:{
        fontSize: 17*rem,
        color: '#616161',
        lineHeight: 22 * rem
    }
});


class EndangeredSpecies extends React.Component {
  render(){
    return (
        <ScrollView style={styles.container}>

          <View>
              <View style={styles.header}>
                  <Image
                      source={require('../../../app/assets/icons/bike.png')}
                      style={{width: 35*rem, height: 22*rem}}
                  />
                  <Text style={styles.headerText}>Endangered Species</Text>
              </View>
              <Image
              source={require('../../../app/assets/images/headerImage_short.png')}
              style={{width: entireScreenWidth, height: 25*rem}}
            />
              <View style={styles.bodyContainer}>
                  <Text style={styles.bodyText}>In 2018, a list was created with the endangered species, among which we find: </Text>
              </View>
            <Text>PICTURES SLIDE HERE</Text>
              <View style={styles.bodyContainer}>
                  <Text style={styles.bodyText}>The causes of this phenomenon are diverse, ranging from illegal hunting, the introduction of alien
                species to the islands, the unconsciousness of certain tourists and inhabitants of the area, to climate
                change that generates harmful variations in the levels of oxygen and other gases at the bottom of
                the sea.</Text>
              </View>
      </View>
      </ScrollView>

    );
  }
}

export default EndangeredSpecies;