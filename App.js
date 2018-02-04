/**
 * Redux React Native tutorial - part1
 * https://github.com/hardeepcoder
 * hardeepphp@yahoo.com
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import store from "./store";
import Myform from "./ourform";
import {Provider} from "react-redux";
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        
        <Provider store={store}>
        <Myform/>
        </Provider>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
