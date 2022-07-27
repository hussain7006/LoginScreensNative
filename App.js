import React from 'react';
import {StyleSheet, View} from 'react-native';
import Login1 from './src/components/login1';
import Login2 from './src/components/login2';
import Login3 from './src/components/login3';
import Todo from './src/components/todo';

function App() {
  return (
    <View style={styles.main}>
      {/* <Login1 /> */}
      {/* <Login2 /> */}
      {/* <Login3 /> */}
      <Todo />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
