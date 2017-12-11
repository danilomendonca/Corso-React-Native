import React from 'react';
import { StyleSheet, View, Text, Image, Picker, Slider, CheckBox, Settings } from 'react-native';

class SettingsScreen extends React.Component{

  static navigationOptions = (navigation, screenProps) => ({
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./../assets/settings-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  });

  constructor(props){
    super(props);
    this.handleMusicChange = this.handleMusicChange.bind(this);
    this.handleMusicLevelChange = this.handleMusicLevelChange.bind(this);
    this.handleVibrationChange = this.handleVibrationChange.bind(this);
  }

  handleMusicChange(itemValue, itemIndex){
    this.props.screenProps.handleMusicChange(itemValue);
  }

  handleMusicLevelChange(value){
    this.props.screenProps.handleMusicLevelChange(value);
  }

  handleVibrationChange(value){
    this.props.screenProps.handleVibrationChange(value);
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.settings}>
          <View style={{ width: 300, margin: 20, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <CheckBox
              value={this.props.screenProps.settings.vibration}
              onValueChange={this.handleVibrationChange} />
            <Text>Vibration</Text>
          </View>
          <View style={{width: 300, margin: 20}}>
            <Picker
              selectedValue={this.props.screenProps.settings.music}
              onValueChange={this.handleMusicChange}>
              <Picker.Item label="Fire Siren" value="fire_siren.mp3" />
              <Picker.Item label="Alien Scream" value="alien_scream.mp3" />
            </Picker>
          </View>
          <View style={{ width: 300, margin: 20 }}>
            <Slider
              step={1}
              minimumValue={0}
              maximumValue={5}
              value={this.props.screenProps.settings.musicLevel}
              onValueChange={this.handleMusicLevelChange}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#666',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settings: {
    backgroundColor: '#fff'
  },
  icon: {
    width: 26,
    height: 26,
  },
});
