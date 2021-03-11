import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Pessoa extends Component {
    render(){
        return(
        <View style={styles.areaPessoa}>
            <Text style={styles.txtPessoa}>{this.props.data.nome}</Text>
            <Text style={styles.txtPessoa}>{this.props.data.idade}</Text>
            <Text style={styles.txtPessoa}>{this.props.data.email}</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
areaPessoa: {
  backgroundColor: '#222',
  marginBottom: 10,
  height: 200
},
txtPessoa: {
  fontSize: 20,
  color: '#FFF'
}
});

export default Pessoa;