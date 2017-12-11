import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class SettingsScreen extends React.Component{

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./../assets/settings-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

export default SettingsScreen;

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
