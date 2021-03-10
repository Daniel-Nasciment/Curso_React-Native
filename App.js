import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component {

  render(){

    return(
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <View style={{height: 50, width: 50, backgroundColor: 'red'}}></View>
        <View style={{height: 50, width: 50, backgroundColor: 'blue'}}></View>
        <View style={{height: 50, width: 50, backgroundColor: 'green'}}></View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  
});

export default App;
