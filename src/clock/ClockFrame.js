import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ClockFrame extends Component {

  formatNumber(number){
    if(number === "" || isNaN(number))
      return number;
    else{
      if(number < 10)
        return "0" + number;
      else
        return number;
    }
  }

  render() {
    return (
      <View style={clockFrameStyles.ClockFrame}>
          <Text style={clockFrameStyles.Numbers}>{this.formatNumber(this.props.number)}</Text>
      </View>
    );
  }
}

const clockFrameStyles = StyleSheet.create({
  ClockFrame: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '30%',
      height: '90%',
      backgroundColor: '#000',
      margin: 5,
      padding: 10,
      borderRadius: 4
  },
  Numbers: {
      fontSize: 30,
      color: '#fff'
  }
});

export default ClockFrame;
