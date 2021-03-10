import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      ultTemp: null,
      numero: 0,
      botao: 'INICIAR'
    }
    
    //Variável do timmer
    this.timmer = null;
    
    this.vai = this.vai.bind(this);
    this.zerou = this.zerou.bind(this);
  }

  vai(){

    if(this.timmer != null) {
      //Aqui vai parar o timmer 
      clearInterval(this.timmer);
      this.timmer = null;
      this.setState({
        botao: "INICIAR"
      })
    }else {
      this.timmer = setInterval(() => {
        this.setState({
          numero: this.state.numero + 0.1,
          botao: "PAUSAR"
        })
      }, 100);
    }

  }

  zerou(){
    if(this.timmer !=null || this.timmer == null){
      clearInterval(this.timmer);
      this.timmer = null;
      this.setState({
        ultTemp: this.state.numero > 0 ? 'Último tempo: ' + this.state.numero.toFixed(1) : '',
        numero: 0,
        botao: 'INICIAR'
      })
    }
  }
  
  render(){

    return(
      <View style={styles.container}>
        <Image 
        source = {require('./src/relogio.png')}
        />

      <Text style={styles.timer}>{this.state.numero.toFixed(2)}</Text>

      <View style={styles.btnArea}>
        
        <TouchableOpacity style={styles.btn} onPress={this.vai}>
          <Text style={styles.btnTexto}>{this.state.botao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={this.zerou}>
          <Text style={styles.btnTexto}>ZERAR</Text>
        </TouchableOpacity>

      </View>

      <View>
        <Text style={styles.btnTexto}>{this.state.ultTemp}</Text>
      </View>

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
  timer: {
    margin: 10,
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 10 
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#222',
    borderRadius: 3,
    margin: 5,
    height: 40,
    backgroundColor: '#00aeef'
  },
  btnTexto: {
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
});

export default App;
