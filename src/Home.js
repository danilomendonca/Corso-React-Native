import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Clock from './clock/Clock.js';

class HomeScreen extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./../assets/clock-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, width: '90%', justifyContent: 'center', alignItems: 'center'}}>
          <Clock/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 26,
    height: 26,
  }
});

export default HomeScreen;
