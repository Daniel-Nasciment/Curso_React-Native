import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome: ''
    };
    this.pegarNome = this.pegarNome.bind(this);
  }

  pegarNome(texto) {
    this.setState({
      nome: texto
    })
  }

  render(){

    return(
      <View style={styles.container}>
        <TextInput 
        style={styles.input}
        placeholder={"Digite seu nome: "}
        onChangeText={this.pegarNome}
        />

      <Text style={styles.frase}>Bem Vindo, {this.state.nome}!</Text>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10
  },
  frase: {
    textAlign: 'center',
    fontSize: 20
  }
});

export default App;
