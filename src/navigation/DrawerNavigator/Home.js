//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

// create a component
const Home = ({navigation}) => {
    function handleNavigation(screen){
        navigation.navigate(screen)
    }
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <View>
                <TouchableOpacity onPress={()=> handleNavigation('About')}>
                    <Text>Go to About</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0E6655',
    },
});

//make this component available to the app
export default Home;
