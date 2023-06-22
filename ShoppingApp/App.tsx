import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Homescreen from './screens/Homescreen';
import {Provider} from 'react-redux';
import Store from './Store';
class App extends Component {
  render() {
    return (
      //       <View style={styles.container}>
      // <Homescreen/>
      //       </View>
      <Provider store={Store}>
        <Homescreen />
      </Provider>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
