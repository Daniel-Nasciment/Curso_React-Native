import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome: ''
    }
    this.entrar = this.entrar.bind(this);
  }

  entrar(nome) {
    this.setState({
      nome: nome
    })
  }

  render(){

    return(
      <View>

      <Button title={"Entrar"} onPress={() => this.entrar('Daniel Nascimento')}/>

        <Text>
          {this.state.nome}
        </Text>
      </View>
    );
  }

}

export default App;
