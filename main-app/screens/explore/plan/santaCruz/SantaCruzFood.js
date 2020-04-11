import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions, SafeAreaView, ScrollView} from 'react-native';
import { any } from 'prop-types';

//get scaling factors
const entireScreenWidth = Dimensions.get('window').width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create ({
    header:{
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 34,
        alignItems: 'center'
    },
    headerText: {
        paddingLeft: 16,
        fontSize: 28*rem,
        fontWeight: "600",
    },
    buttonText:{
        fontSize: 17*rem,
        paddingLeft: 16
    },
    buttonContainer:{
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#C0C0C0',
        paddingVertical: 10,
        paddingLeft: 34,
        paddingRight: 14
    },
    lastButtonContainer:{
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 10,
        borderColor: '#C0C0C0',
        paddingLeft: 34,
        paddingRight: 14
    },
    buttonLeft:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonRight:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }, 
    chevron:{
        width: 11*rem, 
        height: 18*rem
    },
    regularBold:{
        fontWeight: '600',
        color: '#000000',
        fontSize: 17*rem,
        paddingLeft: 30,
        paddingTop: 16, 
        paddingBottom: 16,
        flexWrap: "wrap"
    },
    regular:{
      fontSize: 17*rem,
      color: '#616161',
      padding: 30,
      lineHeight: 20 * rem
    },
    numberRow:{
      flexDirection: 'row',
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 34,
      alignItems: 'stretch'
    },
    wrapper: {
      height: 200*rem,
    },
    slide: {
      justifyContent: 'center',
      alignItems: 'center',
      width: Dimensions.get('window').width,
    },
    slideImage: {
      height: 250*rem,
      width: Dimensions.get('window').width,
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    },
    infoPhone: {
      width: 20*rem, 
      height: 18*rem,
    },
    infoEmail: {
      width: 21*rem, 
      height: 16*rem,
    },
    infoAddress: {
      width: 18*rem, 
      height: 21*rem,
    },
    infoWeb: {
      width: 20*rem, 
      height: 20*rem,
    },
    infoText: {
      fontSize: 17*rem,
      color: '#616161',
      lineHeight: 20*rem, 
      marginLeft: 10*rem,
      marginRight: 20*rem, 
    },
    numberRow:{
      flexDirection: 'row',
      paddingTop: 20,
      justifyContent: "center",
      flexWrap: "wrap"
    },
    lastRow:{
      flexDirection: 'row',
      paddingTop: 20,
      paddingBottom: 50,
      justifyContent: "center",
      flexWrap: "wrap"
    }
});

class SantaCruzFood extends React.Component {
  render(){
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={{backgroundColor: 'white', flex: 1}}>
          <View style={styles.header}>
              <Image
                  source={require('../../../../app/assets/icons/food.png')}
                  style={{width: 25*rem, height: 31 *rem}}
              />
              <Text style={styles.headerText}>Food & Drinks</Text>
          </View>
          <Image
              source={require('../../../../app/assets/images/headerImage_short.png')}
              style={{width: entireScreenWidth, height: 25*rem}}
          />
      
              <Text style={styles.regularBold}>1835 Coffee Lab</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/1835-coffee-lab/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/1835-coffee-lab/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/1835-coffee-lab/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/1835-coffee-lab/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <Image
                      source={require('../../../../app/assets/icons/phone.png')}
                      style={styles.infoPhone}
                  />
                  <Text style={styles.infoText}>Call</Text>
                  <Image
                      source={require('../../../../app/assets/icons/email.png')}
                      style={styles.infoEmail}
                  />
                  <Text style={styles.infoText}>Email</Text>
                  <Image
                      source={require('../../../../app/assets/icons/www_gray.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Website</Text>
              </View>
              <View style={styles.lastRow}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Bar Bongo</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/bar-bongo/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/bar-bongo/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/bar-bongo/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/bar-bongo/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <Image
                      source={require('../../../../app/assets/icons/phone.png')}
                      style={styles.infoPhone}
                  />
                  <Text style={styles.infoText}>Call</Text>
                  <Image
                      source={require('../../../../app/assets/icons/email.png')}
                      style={styles.infoEmail}
                  />
                  <Text style={styles.infoText}>Email</Text>
                  <Image
                      source={require('../../../../app/assets/icons/www_gray.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Website</Text>
              </View>
              <View style={styles.lastRow}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Discoteca La Panga</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/discoteca-la-panga/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/discoteca-la-panga/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/discoteca-la-panga/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <Image
                      source={require('../../../../app/assets/icons/phone.png')}
                      style={styles.infoPhone}
                  />
                  <Text style={styles.infoText}>Call</Text>
                  <Image
                      source={require('../../../../app/assets/icons/email.png')}
                      style={styles.infoEmail}
                  />
                  <Text style={styles.infoText}>Email</Text>
                  <Image
                      source={require('../../../../app/assets/icons/www_gray.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Website</Text>
              </View>
              <View style={styles.lastRow}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>El Muelle de Darwin</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/el-muelle-de-darwin/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/el-muelle-de-darwin/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/el-muelle-de-darwin/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/el-muelle-de-darwin/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <Image
                      source={require('../../../../app/assets/icons/phone.png')}
                      style={styles.infoPhone}
                  />
                  <Text style={styles.infoText}>Call</Text>
                  <Image
                      source={require('../../../../app/assets/icons/email.png')}
                      style={styles.infoEmail}
                  />
                  <Text style={styles.infoText}>Email</Text>
                  <Image
                      source={require('../../../../app/assets/icons/www_gray.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Website</Text>
              </View>
              <View style={styles.lastRow}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Lo & Lo Restaurante</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/lo-lo/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/lo-lo/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/lo-lo/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/lo-lo/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <Image
                      source={require('../../../../app/assets/icons/phone.png')}
                      style={styles.infoPhone}
                  />
                  <Text style={styles.infoText}>Call</Text>
                  <Image
                      source={require('../../../../app/assets/icons/email.png')}
                      style={styles.infoEmail}
                  />
                  <Text style={styles.infoText}>Email</Text>
                  <Image
                      source={require('../../../../app/assets/icons/www_gray.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Website</Text>
              </View>
              <View style={styles.lastRow}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Restaurante Aquelarre</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/aquelarre/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/aquelarre/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/aquelarre/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/aquelarre/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <Image
                      source={require('../../../../app/assets/icons/phone.png')}
                      style={styles.infoPhone}
                  />
                  <Text style={styles.infoText}>Call</Text>
                  <Image
                      source={require('../../../../app/assets/icons/email.png')}
                      style={styles.infoEmail}
                  />
                  <Text style={styles.infoText}>Email</Text>
                  <Image
                      source={require('../../../../app/assets/icons/www_gray.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Website</Text>
              </View>
              <View style={styles.lastRow}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Restaurante Bahía Mar</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/bahia-mar/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/bahia-mar/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/bahia-mar/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/bahia-mar/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <Image
                      source={require('../../../../app/assets/icons/phone.png')}
                      style={styles.infoPhone}
                  />
                  <Text style={styles.infoText}>Call</Text>
                  <Image
                      source={require('../../../../app/assets/icons/email.png')}
                      style={styles.infoEmail}
                  />
                  <Text style={styles.infoText}>Email</Text>
                  <Image
                      source={require('../../../../app/assets/icons/www_gray.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Website</Text>
              </View>
              <View style={styles.lastRow}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Cebichería El Guille</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/el-guille/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/el-guille/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/el-guille/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/el-guille/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <Image
                      source={require('../../../../app/assets/icons/phone.png')}
                      style={styles.infoPhone}
                  />
                  <Text style={styles.infoText}>Call</Text>
                  <Image
                      source={require('../../../../app/assets/icons/email.png')}
                      style={styles.infoEmail}
                  />
                  <Text style={styles.infoText}>Email</Text>
                  <Image
                      source={require('../../../../app/assets/icons/www_gray.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Website</Text>
              </View>
              <View style={styles.lastRow}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Il Nuovo Giardino</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/il-nuovo-giardino/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/il-nuovo-giardino/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/il-nuovo-giardino/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/il-nuovo-giardino/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <Image
                      source={require('../../../../app/assets/icons/phone.png')}
                      style={styles.infoPhone}
                  />
                  <Text style={styles.infoText}>Call</Text>
                  <Image
                      source={require('../../../../app/assets/icons/email.png')}
                      style={styles.infoEmail}
                  />
                  <Text style={styles.infoText}>Email</Text>
                  <Image
                      source={require('../../../../app/assets/icons/www_gray.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Website</Text>
              </View>
              <View style={styles.lastRow}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Restaurante Isla Grill</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/isla-grill/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/isla-grill/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/isla-grill/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/isla-grill/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <Image
                      source={require('../../../../app/assets/icons/phone.png')}
                      style={styles.infoPhone}
                  />
                  <Text style={styles.infoText}>Call</Text>
                  <Image
                      source={require('../../../../app/assets/icons/email.png')}
                      style={styles.infoEmail}
                  />
                  <Text style={styles.infoText}>Email</Text>
                  <Image
                      source={require('../../../../app/assets/icons/www_gray.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Website</Text>
              </View>
              <View style={styles.lastRow}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Restaurante La Garrapata</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/la-garrapata/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/la-garrapata/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/la-garrapata/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/la-garrapata/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <Image
                      source={require('../../../../app/assets/icons/phone.png')}
                      style={styles.infoPhone}
                  />
                  <Text style={styles.infoText}>Call</Text>
                  <Image
                      source={require('../../../../app/assets/icons/email.png')}
                      style={styles.infoEmail}
                  />
                  <Text style={styles.infoText}>Email</Text>
                  <Image
                      source={require('../../../../app/assets/icons/www_gray.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Website</Text>
              </View>
              <View style={styles.lastRow}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Santa Cruz Brewery Resto Pub</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/brewery-resto-pub/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/brewery-resto-pub/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/brewery-resto-pub/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/brewery-resto-pub/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <Image
                      source={require('../../../../app/assets/icons/phone.png')}
                      style={styles.infoPhone}
                  />
                  <Text style={styles.infoText}>Call</Text>
                  <Image
                      source={require('../../../../app/assets/icons/email.png')}
                      style={styles.infoEmail}
                  />
                  <Text style={styles.infoText}>Email</Text>
                  <Image
                      source={require('../../../../app/assets/icons/www_gray.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Website</Text>
              </View>
              <View style={styles.lastRow}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Cafetería Proinsular</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/cafe-proinsular/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/cafe-proinsular/2.png')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/cafe-proinsular/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/cafe-proinsular/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <Image
                      source={require('../../../../app/assets/icons/phone.png')}
                      style={styles.infoPhone}
                  />
                  <Text style={styles.infoText}>Call</Text>
                  <Image
                      source={require('../../../../app/assets/icons/email.png')}
                      style={styles.infoEmail}
                  />
                  <Text style={styles.infoText}>Email</Text>
                  <Image
                      source={require('../../../../app/assets/icons/www_gray.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Website</Text>
              </View>
              <View style={styles.lastRow}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>

      
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SantaCruzFood;