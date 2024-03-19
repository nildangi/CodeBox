import "react-native-gesture-handler"
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Home from './Home';
import About from './About';
import Contact from "./Contact";
import BottomNavigator from "../BottomNavigator/BottomNavigator";
import { Dimensions } from 'react-native';

const Drawer = createDrawerNavigator();
// const width = Dimensions.get("screen").width;

function DrawerNavigator() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (

    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: Dimensions.get('window').width / 1.00,
        },
        headerStyle: { backgroundColor: '#E93858' },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 20, // Adjust header title font size
        },
        headerRight: () => <Image style={{ width: 70, height: 70, marginTop: 20 }}
          source={require('../StackNavigator/RohitSharma.png')} />

      }}



    >
      <Drawer.Screen name="Homemade Food" component={BottomNavigator} />
      <Drawer.Screen name="Home1" component={Home} />
      {/* <Drawer.Screen name="About1" component={About} /> */}
      {/* <Drawer.Screen name="Contact1" component={Contact} /> */}
    </Drawer.Navigator>

  );

}
export default DrawerNavigator; 