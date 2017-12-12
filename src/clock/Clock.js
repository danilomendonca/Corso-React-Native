import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Vibration, Alert } from 'react-native';
import ClockFrame from './ClockFrame';
import CustomButton from './CustomButton';
import AlarmSound from './AlarmSound.js';


const TIME_MODE = 'T';
const ALARM_MODE = 'A';

class Clock extends Component {

  constructor(props){
      super(props);
      this.state = {
        date: new Date(),
        mode: TIME_MODE,
        alarm: {
          hours: new Date().getHours(),
          minutes: (new Date().getMinutes()) - 1,
          set: false
        }
      };
      this.handleAlarmClick = this.handleAlarmClick.bind(this);
      this.handleHoursClick = this.handleHoursClick.bind(this);
      this.handleMinutesClick = this.handleMinutesClick.bind(this);
      this.cancelAlarm = this.cancelAlarm.bind(this);
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.handleTick(),
      1000
    );
    this.alarmSound = new AlarmSound();
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  handleAlarmClick(){
    if(this.state.mode === ALARM_MODE)
      this.setState({mode: TIME_MODE});
    else
      this.setState({mode: ALARM_MODE});
  }

  handleHoursClick(){
    if(this.state.mode === ALARM_MODE){
      this.setState((prevState, props) => {
        var next = this.incrementHours(prevState.alarm.hours);
        return {
          alarm: {
            hours: next,
            minutes: prevState.alarm.minutes,
            set: true
          }
        }
      });
    }
  }

  handleMinutesClick(){
    if(this.state.mode === ALARM_MODE){
      this.setState((prevState, props) => {
        var next = this.incrementMinutes(prevState.alarm.minutes);
        return {
          alarm: {
            hours: prevState.alarm.hours,
            minutes: next,
            set: true
          }
        }
      });
    }
  }

  incrementHours(prev){
    if(prev + 1 < 24)
      return prev + 1;
    else
      return 0;
  }

  incrementMinutes(prev){
    if(prev + 1 < 60)
      return prev + 1;
    else
      return 0;
  }

  handleTick(){
    this.setState({
        date: new Date()
      }
    );
    this.checkAlarm();
  }

  checkAlarm(){
    if(this.state.alarm.set &&
       this.state.date.getHours() === this.state.alarm.hours &&
       this.state.date.getMinutes() === this.state.alarm.minutes){
         var alarm = this.state.alarm;
         alarm.set = false;
         this.setState({
           alarm: alarm
         });
         this.fireAlarm(alarm);
    }
  }

  fireAlarm(alarm){
    if(global.settings.vibration){
      Vibration.vibrate(2000);
    }
    this.alarmSound.play({uri: global.settings.music, level: global.settings.musicLevel});
    Alert.alert(
      'Alarm',
      'Your ' + alarm.hours + ':' + alarm.minutes + ' is ringing',
      [
        //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        //{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: this.cancelAlarm}
      ],
      { cancelable: false }
    )
  }

  cancelAlarm(){
    this.alarmSound.stop();
  }

  render(){

    const timeMode = this.state.mode === TIME_MODE;
    return (
      <View style={styles.Clock}>
        <View style={styles.ClockButtons}>
          <CustomButton name="H" onButtonClick={this.handleHoursClick} />
          <CustomButton name="M" onButtonClick={this.handleMinutesClick} />
          <CustomButton name="A" onButtonClick={this.handleAlarmClick} />
        </View>
        {timeMode ? (
          <View style={styles.ClockNumbers}>
            <ClockFrame number={this.state.date.getHours()}/>
            <ClockFrame number={this.state.date.getMinutes()}/>
            <ClockFrame number={this.state.date.getSeconds()}/>
          </View>
        ) : (
          <View style={styles.ClockNumbers}>
            <ClockFrame number={this.state.alarm.hours}/>
            <ClockFrame number={this.state.alarm.minutes}/>
            <ClockFrame number="--"/>
          </View>
        )}
      </View>
    );
  }
}

export default Clock;

const styles = StyleSheet.create({
  Clock: {
    height: 160,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 4,
    borderRadius: 4
  },
  ClockNumbers: {
    flex: 2.5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ClockButtons: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
