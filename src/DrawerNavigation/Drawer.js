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

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerStyle:{backgroundColor:'lightblue'}}}/>
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
export default MyStack; 