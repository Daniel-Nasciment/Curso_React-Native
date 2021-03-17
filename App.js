import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      txtCli: '',
      txtSab: '',
      txtTam: '',
      txtQtd: '',
      pedidos: [
        {key: 0, cliente: 'Daniel Nascimento', sabor: 'Strogonoff', tamanho: 'grande', quantidade: '1'}
      ]
    }

    this.inserirRegistro = this.inserirRegistro.bind(this);

  }

  renderItem(obj){
    return(
      <View>
        <Text style={styles.txtCli}>Cliente: {obj.item.cliente}</Text>
        <Text style={styles.txtPizza}>{obj.item.quantidade} - Pizza de {obj.item.sabor}/{obj.item.tamanho}</Text>
      </View>
    );
  }

  inserirRegistro(){
    let newReg = {
      key: this.state.pedidos.toString(),
      cliente: this.state.txtCli,
      sabor: this.state.txtSab ,
      tamanho: this.state.txtTam,
      quantidade: this.state.txtQtd
    }

    let pedidos = this.state.pedidos;
    pedidos.push(newReg);
    this.setState({pedidos});

    this.setState({txtCli: ''});
    this.setState({txtSab: ''});
    this.setState({txtTam: ''});
    this.setState({txtQtd: ''});
  
  }


  render(){

    return(
      
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image style={{width: 500, height:200}} source={require ('./src/pizza.jpg')} />
        </View>
        <ScrollView>
        <View style={styles.form}>

          <View style={styles.boxCampos}> 
            <Text style={styles.formTxt}>Cliente:</Text>
            <Text style={styles.formTxt}>Sabor:</Text>
            <Text style={styles.formTxt}>Tamanho:</Text>
            <Text style={styles.formTxt}>Quantidade:</Text>               
          </View>

          <View style={styles.boxCampos}> 
            
          <TextInput style={styles.inputTxt} placeholder={'Ex: Daniel Nascimento'} onChangeText={(txtCli) => {this.setState({txtCli: txtCli})}} value={this.state.txtCli} />
          <TextInput style={styles.inputTxt} placeholder={'Ex: Strogonoff'} onChangeText={(txtSab) => {this.setState({txtSab: txtSab})}} value={this.state.txtSab} />
          <TextInput style={styles.inputTxt} placeholder={'Ex: Broto/Grande'} onChangeText={(txtTam) => {this.setState({txtTam: txtTam})}} value={this.state.txtTam} />
          <TextInput style={styles.inputTxt} placeholder={'Ex: 1'} onChangeText={(txtQtd) => {this.setState({txtQtd: txtQtd})}} value={this.state.txtQtd} />
            
          </View>

        </View>
        
        <View style={styles.btnArea}>
          <TouchableOpacity onPress={this.inserirRegistro} style={styles.btnForm}>
            <Text style={styles.btnTxt}>Registrar pedido</Text>
          </TouchableOpacity>
        </View>
      
        <Text style={styles.txtTitle}>Registros: </Text>

        <FlatList 
          keyExtractor={this.state.pedidos.key}
          data={this.state.pedidos} 
          renderItem={this.renderItem}
          extraData={this.state}
          style={styles.flatList}
          />
        </ScrollView>
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
  txtTitle: {
    textAlign: 'center',
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold'
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




