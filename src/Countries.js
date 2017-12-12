import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ListView, TouchableHighlight } from 'react-native';

class CountriesScreen extends Component{

  static navigationOptions = (navigation, screenProps) => ({
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./../assets/country-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  });

  constructor(props){
    super(props);
    this.state = {
      countriesDs: null
    };
    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount(){
    return fetch('http://services.groupkt.com/country/get/all')
      .then((response)  => response.json())
      .then((responseJson) => responseJson.RestResponse.result)
      .then((countryArrayJson) => {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState(
          {countriesDs: ds.cloneWithRows(countryArrayJson)}
        );
      }).catch((error) => {
        console.error(error);
      }
    );
  }

  handleItemClick(countryData){
    alert(countryData.name);
  }

  renderItem(rowDate, sectionID, rowID, highlightRow){
    return (
      <TouchableHighlight style={styles.item} onPress={this.handleItemClick.bind(this, rowDate)}>
          <Text>{rowDate.name}</Text>
      </TouchableHighlight>
    );
  }

  render(){
    const dsSet = (this.state.countriesDs !== null);
    if(dsSet){
      return (
        <View style={styles.container}>
          <ListView
            style={styles.list}
            dataSource={this.state.countriesDs}
            renderRow={this.renderItem}
          />
        </View>
      );
    }else {
      return (
        <View style={styles.container}>
        </View>
      );
    }
  }
}

export default CountriesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#666',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 10,
  },
  item: {
    padding: 5,
    margin: 2,
    borderColor: '#666',
    borderWidth: 1,
    borderRadius: 0
  },
  highlight: {
    backgroundColor: '#f4cd41'
  },
  icon: {
    width: 26,
    height: 26,
  },
});
