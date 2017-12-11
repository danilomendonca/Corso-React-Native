import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class CustomButton extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.onButtonClick();
  }

  render(){
    return (
      <TouchableOpacity
        onPress={this.handleClick}>
        <View style={styles.ClockButton}>
          <Text style={styles.ClockButtonText}>
            {this.props.name}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default CustomButton;

const styles = StyleSheet.create({
  ClockButton: {
    width: 30,
    backgroundColor: '#eee',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 2,
    marginHorizontal: 1
  },
  ClockButtonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#000',
    fontWeight: 'bold'
  }
});
