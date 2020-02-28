import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Image } from 'react-native';

import Favorites from "./screens/favorites/Favorites"

//LearnSection imports
import Learn from "./screens/learn/Learn";
import AboutUs from "./screens/learn/AboutUs";
import History from "./screens/learn/history/History";
import People from "./screens/learn/history/People";
import Timeline from "./screens/learn/history/Timeline";

//ExploreSection imports
import Explore from "./screens/explore/Explore";
import KnowBefore from "./screens/explore/know/KnowBefore";
import Language from "./screens/explore/know/Language";
import Customs from "./screens/explore/know/Customs";
import Rules from "./screens/explore/know/Rules";


const LearnSection = createStackNavigator({
    Learn: { screen: Learn },
    AboutUs:{screen: AboutUs },
    History: {screen: History},
    People: {screen: People},
    Timeline: {screen: Timeline}
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
    Explore: {screen: Explore},
    KnowBefore : {screen: KnowBefore},
    Language : {screen: Language},
    Customs : {screen: Customs},
    Rules : {screen: Rules}
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
