import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component {

  render(){

    return(
      <View style={{backgroundColor: '#222', flex: 1}}>
        <View style={{flex: 2, backgroundColor: 'red'}}></View>
        <View style={{flex: 1, backgroundColor: 'blue'}}></View>
        <View style={{flex: 2, backgroundColor: 'green'}}></View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  
});

export default App;
