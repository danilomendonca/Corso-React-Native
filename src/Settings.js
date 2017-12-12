import React from 'react';
import { StyleSheet, View, Text, Image, Picker, Slider, CheckBox } from 'react-native';

class PlaylistItem {
  constructor(name, uri, isVideo) {
    this.name = name;
    this.uri = uri;
  }
}

const PLAYLIST = [
  new PlaylistItem(
    'Comfort Fit - “Sorry”',
    'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3'
  ),
  new PlaylistItem(
    'Big Buck Bunny',
    'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
  ),
  new PlaylistItem(
    'Mildred Bailey – “All Of Me”',
    'https://ia800304.us.archive.org/34/items/PaulWhitemanwithMildredBailey/PaulWhitemanwithMildredBailey-AllofMe.mp3'
  ),
  new PlaylistItem(
    "Popeye - I don't scare",
    'https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4'
  ),
  new PlaylistItem(
    'Podington Bear - “Rubber Robot”',
    'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3'
  ),
];

global.settings = {
    music: PLAYLIST[0].uri,
    musicLevel: 1,
    vibration: true
}

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
    this.state = {
        music: PLAYLIST[0].uri,
        musicLevel: 5,
        vibration: true
    };
    this.handleMusicChange = this.handleMusicChange.bind(this);
    this.handleMusicLevelChange = this.handleMusicLevelChange.bind(this);
    this.handleVibrationChange = this.handleVibrationChange.bind(this);
  }

  handleMusicChange(itemValue, itemIndex){
    this.setState({music: itemValue});
    global.settings.music = itemValue;
  }

  handleMusicLevelChange(value){
    this.setState({musicLevel: value});
    global.settings.musicLevel = parseFloat(value) / 5;
  }

  handleVibrationChange(value){
    this.setState({vibration: value});
    global.settings.vibration = value;
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.settings}>
          <View style={{ width: 300, margin: 20, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <CheckBox
              value={this.state.vibration}
              onValueChange={this.handleVibrationChange} />
            <Text>Vibration</Text>
          </View>
          <View style={{width: 300, margin: 20}}>
            <Picker
              selectedValue={this.state.music}
              onValueChange={this.handleMusicChange}>
              {
                PLAYLIST.map((item) =>
                  <Picker.Item key={item.name} label={item.name} value={item.uri} />
                )
              }
            </Picker>
          </View>
          <View style={{ width: 300, margin: 20 }}>
            <Slider
              step={1}
              minimumValue={0}
              maximumValue={5}
              value={this.state.musicLevel}
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
