import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Pessoa from './src/Pessoa';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {id: '1', nome: 'Daniel', idade: 20, email: 'daniel@gmail.com'},
        {id: '2', nome: 'Marco', idade: 20, email: 'Marco@gmail.com'},
        {id: '3', nome: 'Max', idade: 21, email: 'Max@gmail.com'},
        {id: '4', nome: 'Japa', idade: 22, email: 'Japa@gmail.com'},
        {id: '5', nome: 'Daniel', idade: 20, email: 'daniel@gmail.com'},
        {id: '6', nome: 'Marco', idade: 20, email: 'Marco@gmail.com'},
        {id: '7', nome: 'Max', idade: 21, email: 'Max@gmail.com'},
        {id: '8', nome: 'Japa', idade: 22, email: 'Japa@gmail.com'}
      ]
    }
  }

  
  render(){

    return(
      <View style={styles.container}>
        <FlatList 
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Pessoa data={item} /> }
        >
        </FlatList>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;



