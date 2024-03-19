//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const Contact = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mainStyle}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', backgroundColor: '#CD6155', flex: 1 }}>
                    <Image
                        style={{ width: '100%', height:'100%' }}
                        source={require('../../data/Grocery.png')}
                    />
                </View>
                <View style={{ flex: 1, backgroundColor: '#CCCCFF', alignSelf: 'center', fontSize: 20, fontWeight: '800',alignItems:'center',marginBottom:50 }}>
                    <Text style={{fontWeight:'900',fontSize:25}}>Product Name</Text>
                    <Text style={{fontWeight:'900',fontSize:22}}>Price</Text>
                    <Text style={{fontSize:18}} >550</Text>
                    <View style={{height:1,width:40,backgroundColor:'red',margin:1}}></View>
                 <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
                    <Text>Offer</Text>
                    <Text>30%</Text>
                 </View>
                </View>
            </View>
            <Text>Contact</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFF',
    },
    mainStyle: {
        width: '95%',
        justifyContent: 'center',
        height: '25%',
        backgroundColor: '#40E0D0',
        borderRadius: 25,
        flexDirection: 'row',
        flexl: 1,

    }
});

//make this component available to the app
export default Contact;
