import React from 'react';
import { TabNavigator } from 'react-navigation';
import HomeScreen from './src/Home.js'
import SettingsScreen from './src/Settings.js'

const RootNavigator = TabNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
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

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      music: 'Fire Siren',
      musicLevel: 3,
      vibration: true
    };
    this.handleMusicChange = this.handleMusicChange.bind(this);
    this.handleMusicLevelChange = this.handleMusicLevelChange.bind(this);
    this.handleVibrationChange = this.handleVibrationChange.bind(this);
  }

  handleMusicChange(value){
    this.setState({music: value});
  }

  handleMusicLevelChange(value){
    this.setState({musicLevel: value});
  }

  handleVibrationChange(value){
    this.setState({vibration: value});
  }

  render(){
    return (
      <RootNavigator
        screenProps={{
          settings: this.state,
          handleMusicChange: this.handleMusicChange,
          handleMusicLevelChange: this.handleMusicLevelChange,
          handleVibrationChange: this.handleVibrationChange
        }}
      />
    );
  }
}

//export default RootNavigator;
