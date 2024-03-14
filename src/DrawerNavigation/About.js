//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
const About = ({navigation}) => {
    function handleNavigation(screenName){
        navigation.navigate(screenName)
    }
    return (
        <View style={styles.container}>
            <Text>About</Text>
            <View>
                <TouchableOpacity onPress={()=> handleNavigation('Contact')}>
                    <Text>Go to Contact</Text>
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
        backgroundColor: '#5F6A6A',
    },
});

//make this component available to the app
export default About;
