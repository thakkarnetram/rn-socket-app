/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// components
import Home from './src/Home';
import Room from './src/Room';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <SafeAreaView style={styles.background}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen component={Room} name="Room" />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
});

export default App;
