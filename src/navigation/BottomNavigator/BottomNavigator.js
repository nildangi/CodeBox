import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'

// navigation screens
import Home from '../DrawerNavigator/Home';
import About from '../DrawerNavigator/About';
import Contact from '../DrawerNavigator/Contact';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
          {/* <Tab.Screen name="Home" component={Home} /> */}
          <Tab.Screen name="About" component={About} />
          <Tab.Screen name="Contact" component={Contact} />
        </Tab.Navigator>
      );
}

export default BottomNavigator