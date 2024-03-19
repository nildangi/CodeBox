//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Drawer from './src/navigation/DrawerNavigator/Drawer'
import StackNavigator from './src/navigation/StackNavigator/StackNavigator';


// create a component
const App = () => {
  return (
    <View  style={styles.container} >
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#E93858" translucent = {true}/>
    <StackNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;
``