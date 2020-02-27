import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Image } from 'react-native';

import Favorites from "./screens/favorites/Favorites"
import Learn from "./screens/learn/Learn";
import Explore from "./screens/explore/Explore";
import AboutUs from "./screens/learn/AboutUs";



const LearnSection = createStackNavigator({
  Learn: {
   screen: Learn
  },
    AboutUs:{
      screen: AboutUs
    }
});

LearnSection.navigationOptions = ({ navigation }) => {
    return {
        tabBarLabel: "Learn",
        tabBarIcon: ({tintcolor}) => (
            <Image
                source={require('./app/assets/icons/galapagos.png')}
                style={{width: 30, height: 30}}
            />
        )
    };
};

const ExploreSection = createStackNavigator({
    Explore: {screen: Explore}
});

ExploreSection.navigationOptions = ({navigation}) => {
    return{
        tabBarLabel: "Explore",
        tabBarIcon: ({tintcolor}) => (
            <Image
                source={require('./app/assets/icons/compass.png')}
                style={{width: 30, height: 30}}
            />
        )
    }
};

const FavoritesSection = createStackNavigator({
   Favorites : {screen: Favorites}
});

FavoritesSection.navigationOptions = ({navigation}) => {
    return{
        tabBarLabel: "Favorites",
        tabBarIcon: ({tintcolor}) => (
            <Image
                source={require('./app/assets/icons/turtle.png')}
                style={{width: 30, height: 30}}
            />
        )
    }
};

const TabNavigator = createBottomTabNavigator({
    Explore: ExploreSection,
    Learn: LearnSection,
    Favorites: FavoritesSection
});

export default createAppContainer(TabNavigator)
