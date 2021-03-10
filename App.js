import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      frase: '',
      img: require('./src/biscoito.png')
    };

   this.quebrarBiscoito = this.quebrarBiscoito.bind(this);

    this.frases = [
      "Essa é a frase 1.",
      "Essa é a frase 2.",
      "Essa é a frase 3.",
      "Essa é a frase 4.",
      "Essa é a frase 5.",
      "Essa é a frase 6."
    ];

  }

  quebrarBiscoito(){
  
    let numAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      frase: this.frases[numAleatorio],
      img: require('./src/biscoitoAberto.png')
    })
}

  render(){

    return(
      <View style={styles.container}>
        <Image 
        source={this.state.img}
        style={styles.img}
        />

      <Text style={styles.frase}>{this.state.frase}</Text>

      <TouchableOpacity style={styles.btn} onPress={this.quebrarBiscoito}> 
        <View style={styles.btnArea}>
          <Text style={styles.btnTxt}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>
    

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  frase: {
    textAlign: 'center',
    color: '#dd7b22',
    margin: 30,
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic'
  },
  img: {
    width: 250,
    height: 250
  },
  btn: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

export default App;
