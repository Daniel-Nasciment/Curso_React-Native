import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component {

  render(){

    return(
      <View style={styles.area}>
        <Text style={styles.txt1, styles.alinhaTexto}>Eu sou texto 1</Text>
        <Text>Eu sou texto 2</Text>
        <Text>Eu sou texto 3</Text>
        <Text style={styles.alinhaTexto}>Eu sou texto 4</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  area: {
    marginTop: 20
  },
  txt1: {
    fontSize: 25,
    color: 'red'
  },
  alinhaTexto: {
    textAlign: 'center'
  }

});

export default App;
