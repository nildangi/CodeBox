// //import liraries
// import "react-native-gesture-handler"
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { NavigationContainer } from "@react-navigation/native";
// import Home from './Home'
// import About from "./About";


// const Drawer = createDrawerNavigator();

// function DrawerNavigation() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="About" component={About} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
// export default DrawerNavigation;

import "react-native-gesture-handler"
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Home from './Home';
import About from './About';
import Contact from "./Contact";


const Drawer = createDrawerNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );

}
export default MyStack; 