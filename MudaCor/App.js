
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';


export default class App extends Component {

  state = {
    corPadrao: '#000'
  }

  mudaCor = () => {
    var color = this.geraCor()
    this.setState({corPadrao: color})
  }

  geraCor = () => {
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';
  
    for (var i = 0; i < 6; i++ ) {
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
  }

  render() {
    return (
      <View style={styles.container} backgroundColor={this.state.corPadrao} onPress={this.mudaCor}>
        <TouchableHighlight style={styles.input} onPress={this.mudaCor}>
        <Text></Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    backgroundColor:'#fff',
    borderRadius:50,
  }
});
