import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input: ''
    };
    
    this.entrar = this.entrar.bind(this);
  }

  

  entrar() {
    if(this.state.input.length > 0){
      this.setState({nome: 'Bem vindo, ' + this.state.input})
    }else {
      alert("Digite seu nome!")
      this.setState({nome: ''})
    }
  }

  render(){

    return(
      <View style={styles.container}>
        <TextInput 
        style={styles.input}
        placeholder={"Digite seu nome: "}
        onChangeText={ (texto) => this.setState({input: texto}) }
        />

        <Button 
        title={"Entrar"}
        onPress={this.entrar}

        />

      <Text style={styles.frase}>{this.state.nome}</Text>

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
