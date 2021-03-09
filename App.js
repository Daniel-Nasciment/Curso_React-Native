import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class App extends Component {

  render(){
    return(
      <View>
        <Text>
          Olá Mundo!
        </Text>
        <Jobs largura={500} altura={200} nome={"Steve Jobs"}/>
      </View>
    );
  }

}

export default App;
class Jobs extends Component {
  render() {

    let img = 'https://sujeitoprogramador.com/steve.png';

    return(
      <View>
        <Image 
        source={{uri: img}}
        style={{width: this.props.largura, height: this.props.altura}}
        />

        <Text>{this.props.nome}</Text>
      </View>
    );
  }
}