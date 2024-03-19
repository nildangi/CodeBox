
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text,Image } from 'react-native'
import DrawerNavigator from '../DrawerNavigator/DrawerNavigator';
// navigation screens
import Home from '../DrawerNavigator/Home';
import About from '../DrawerNavigator/About';
import Contact from '../DrawerNavigator/Contact';
import Login from '../../screens/Login';
import Signup from '../../screens/Signup';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from '../BottomNavigator/BottomNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                {/* <Stack.Screen name="Home" component={Home} /> */}
                {/* <Stack.Screen name="About" component={About} 
                Option={{title:'Nilesh'}}
                /> */}
                {/* <Stack.Screen name="Contact" component={Contact} /> */}
                {/* <Stack.Screen name="Login" component={Login} Options={{headerShown:false}}/> */}
                {/* <Stack.Screen name="Signup" component={Signup} Options={{headerShown:false}}/> */}
                <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator