import React from 'react';
import {View, StyleSheet, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';
import { ThemeConsumer } from 'react-native-elements';

const Tab = createBottomTabNavigator();


const Registro = (props) => {
  return(
    <View style={styles.container}>
      <View style={styles.form}>

          <View style={styles.boxCampos}> 
            <Text style={styles.formTxt}>Cliente:</Text>
            <Text style={styles.formTxt}>Sabor:</Text>
            <Text style={styles.formTxt}>Tamanho:</Text>
            <Text style={styles.formTxt}>Quantidade:</Text>               
          </View>

          <View style={styles.boxCampos}> 
            
          <TextInput style={styles.inputTxt} placeholder={'Ex: Daniel Nascimento'} value={props.pedidoAtual.cliente} 
          onChangeText={ (texto) => {props.atualizarInput('cliente', texto)} } />
          
          <TextInput style={styles.inputTxt} placeholder={'Ex: Strogonoff'} value={props.pedidoAtual.sabor} 
          onChangeText={ (texto) => {props.atualizarInput('sabor', texto)} } />
          
          <TextInput style={styles.inputTxt} placeholder={'Ex: Broto/Grande'} value={props.pedidoAtual.tamanho} 
          onChangeText={ (texto) => {props.atualizarInput('tamanho', texto)} } />
          
          <TextInput style={styles.inputTxt} placeholder={'Ex: 1'} value={props.pedidoAtual.quantidade} 
          onChangeText={ (texto) => {props.atualizarInput('quantidade', texto)} } />
            
          </View>

        </View>

        <View style={styles.btnArea}>
          <TouchableOpacity  style={styles.btnForm} onPress={props.gravar}>
            <Text style={styles.btnTxt}>Registrar pedido</Text>
          </TouchableOpacity>
        </View>

    </View>
  );
}

const LinhaPedido = (props) => {
  return(
    <View style={styles.container}>
      <Text style={styles.txtCli}>
        {props.item.cliente}
      </Text>
      <Text style={styles.txtPizza}>
        {props.item.quantidade}un. - {props.item.sabor} {props.item.tamanho}
      </Text>
    </View>
  );
}

const ListaRegistro = (props) => {
  return(
    <FlatList 
    data={props.pedidos}
    renderItem={LinhaPedido}
    
    />
  );
}


class App extends React.Component {
  
 state = {
      pedidoAtual: {
        cliente: '',
        sabor: '',
        tamanho: '',
        quantidade: 0
      },
      pedidos: []
    }
  

    atualizarPedido(campo, texto) {
      const novoState = {...this.state};
      novoState.pedidoAtual[campo] = texto;
      this.setState(novoState);
    }

    gravarPedido() {
      const novoState = {...this.state};
      novoState.pedidos.push({... novoState.pedidoAtual});
      this.setState(novoState);
      alert('Pedido registrado!')
    }

    componentDidMount(){
      axios.get('https://fecaf-pdm2-backend.herokuapp.com/pedido').then((res) => {
        console.log(res.data);
        const novoState = {...this.state};
        novoState.pedidos = [...res.data];
        this.setState(novoState);
      })
    }


  render(){

    return(
      
      <View style={styles.container}>
        
        
        <View style={styles.logo}>
          <Image style={{width: 500, height:200}} source={require ('./src/pizza.jpg')} />
        </View>
        
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Registrar">
              { () => {return( <Registro pedidoAtual={this.state.pedidoAtual} 
              atualizarInput={ (campo, txt) => {this.atualizarPedido(campo, txt)} } 
              gravar={() => {this.gravarPedido()}}  /> );} }
            </Tab.Screen>
            <Tab.Screen name="Pedidos">
            { () => {return( <ListaRegistro pedidos={this.state.pedidos} />);} }
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>

        
        
      </View>
      
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    height:200,
    resizeMode: 'cover'
  },
  form: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  formTxt: {
    fontSize: 20,
    marginVertical: 11,
    height: 40
  },
  inputTxt: {
    borderWidth: 1,
    height: 40,
    marginVertical: 10,
    width: 250,
    fontSize: 20,
    padding: 5
  },
  boxCampos: {
    margin: 10,
    flexDirection: 'column'
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnForm: {
    width: 200,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5
  },
  btnTxt: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  flatList: {
    marginVertical: 5
  },
  txtCli: {
    margin: 5,
    padding: 5,
    borderTopWidth: 1,
    borderColor: '#CCC',
    fontSize: 15,
    fontWeight: 'bold'
  },
  txtPizza: {
    borderBottomWidth: 1,
    borderColor: '#CCC',
    marginLeft: 5,
    marginTop: -12,
    fontSize: 12
  }

});


export default App;
