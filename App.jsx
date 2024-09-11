/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet , Text } from 'react-native';

import Home from './src/Home';

// IO 
import io from "socket.io-client";

const App = () => {

  useEffect(() => {
    const socket = io.connect("http://192.168.29.154:3001")
    socket.emit("connection")
  }, []);

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
