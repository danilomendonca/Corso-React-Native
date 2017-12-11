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

export default RootNavigator;
