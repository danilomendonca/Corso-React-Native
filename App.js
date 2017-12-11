import React from 'react';
import { StyleSheet, View } from 'react-native';
import Clock from './src/clock/Clock.js';

export default class App extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:0.5, width: '90%', alignItems: 'center'}}>
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
  }
});
