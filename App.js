import React from 'react';
import { TabNavigator } from 'react-navigation';
import HomeScreen from './src/Home.js';
import SettingsScreen from './src/Settings.js';
import CountriesScreen from './src/Countries.js';

const RootNavigator = TabNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  },
  Countries: {
    screen: CountriesScreen
  }
},{
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#fff',
    showIcon: true,
    showLabel: false,
    style: {
      backgroundColor: '#C2185B'
    }
  }
});

class App extends React.Component{

  render(){
    return (
      <RootNavigator/>
    );
  }
}

export default App;
