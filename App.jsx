/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet  } from 'react-native';

import Home from './src/Home';



const App = () => {



  return (
    <SafeAreaView style={styles.background}>
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background:{
    backgroundColor:"#ffffff",
    flex : 1
  }
});

export default App;
