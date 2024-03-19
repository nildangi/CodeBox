//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';


// create a component
const About = ({ navigation }) => {
    const [data, setData] = useState(null);
    function handleNavigation(screenName) {
        navigation.navigate(screenName)
    }
    useEffect(() => {
        const baseUrl = "https://jsonplaceholder.typicode.com/posts/1";
        axios.get(baseUrl)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.error("Error Fetching Data:", error);
            })
    }, []);
    return (
        <View style={styles.container}>
            <Text>About</Text>
            <View>
                <TouchableOpacity onPress={() => handleNavigation('Contact')}>
                    <Text>Go to Contact</Text>
                </TouchableOpacity>
            </View>
            {
                data ?

                    <View>
                        <Text style={{ backgroundColor: 'red' }}>{data.id}</Text>
                        <Text style={{ backgroundColor: 'lightpink' }}>{data.title}</Text>
                        <Text style={{ backgroundColor: 'lightyellow' }}>{data.body}</Text>
                    </View>
                    : null}
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
