import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

export default class Hello360 extends React.Component {
  state = {
    count:'MyHousingMexico.com'
  }

  _incrementCount = () =>{
      this.setState({count :'Comming Soon!'})
  }
  _change = () => {
    this.setState({count:'MyHousingMexico.com'})
  }

  render() {
    const {count} = this.state
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          
            <VrButton onEnter={this._incrementCount} onExit={this._change} style={styles.greetingBox}>
              <Text style={styles.greeting}>{count}</Text>
             </VrButton>
          
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: 'black',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
