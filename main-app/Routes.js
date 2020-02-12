import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Learn from "./screens/learn/Learn";
import Explore from "./screens/explore/Explore";


const ProjectNavigation= createStackNavigator({
  Learn: {
   screen: Learn
  },
  Explore: {
    screen: Explore
  }
});

export default createAppContainer(ProjectNavigation);