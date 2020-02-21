import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';

import Learn from "./screens/learn/Learn";
import Explore from "./screens/explore/Explore";
import {Icon} from "expo";


/*const ProjectNavigation= createStackNavigator({
  Explore: {
    screen: Explore
  },
  Learn: {
   screen: Learn
  }
}); */

const TabNavigator = createBottomTabNavigator({
    Explore: {
        screen: Explore,
        navigationOptions:{
            tabBarLabel: "Explore",
            tabBarIcon: ({tintcolor}) => (
                <Image
                    source={require('./app/assets/icons/turtle.png')}
                    style={{width: 25, height: 25}}
                />
            )
        }
    },
    Learn: {
        screen: Learn,
        navigationOptions:{
            tabBarLabel: "Learn",
            tabBarIcon: ({tintcolor}) => (
                <Image
                    source={require('./app/assets/icons/turtle.png')}
                    style={{width: 25, height: 25}}
                />
            )
        }
    }
});

export default createAppContainer(TabNavigator)

/*function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Learn" component={Learn}/>
            <Tab.Screen name="Explore" component={Explore}/>
        </Tab.Navigator>
    );
}

export default MyTabs;
   {
        Learn:{
            screen: Learn,
            navigationOptions:{
                tabBarIcon: ({tintColor}) =>(
                    <Icon name={'./assets/icons/galapagos.svg'} size={25} color={tintColor}/>
                )
            }
        },
        Explore: {
            screen: Explore,
            navigationOptions:{
                tabBarIcon: ({tintColor}) => (
                    <Icon name={'./assets/icons/compass.svg'} size={25} color={tintColor}/>
                )
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: '#FF6F00',
            inactiveTintColor: '#263238',
        },
    }
);

export default createAppContainer(bottomTabNavigator);
export default createAppContainer(ProjectNavigation); */