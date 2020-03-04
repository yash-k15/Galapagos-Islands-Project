import 'react-native-gesture-handler';
// import React, { Component } from 'react';
import * as React from 'react';
import TabNavigator from './Routes';

export default class App extends React.Component {
  render() {
    return (
      <TabNavigator/>
    );
  }
}