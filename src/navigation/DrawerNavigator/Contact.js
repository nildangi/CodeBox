//import liraries
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

// create a component
const Contact = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
       // const baseUrl = "https://app.aforro.in/api/product/list/";
       const baseUrl = "https://app.aforro.in/api/";
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
            <ScrollView>
                {data && data.result.map((item, index) => (
                    <View key={index} style={styles.mainStyle}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', backgroundColor: '#CD6155', flex: 1 }}>
                            <Image
                                style={{ width: '60%', height: '80%' }}
                                source={{ uri: item.image }}
                            />
                        </View>
                        <View style={{ flex: 1, backgroundColor: '#CCCCFF', alignSelf: 'center', fontSize: 20, fontWeight: '800', alignItems: 'center', marginBottom: 50 }}>
                            <Text style={{ fontWeight: '900', fontSize: 25 }}>{item.name}</Text>
                            <Text style={{ fontWeight: '900', fontSize: 22 }}>Price: {item.variety.selling_price}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Offer</Text>
                                <Text style={{ fontSize: 15 }}>30%</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffff',
        justifyContent:'center',
        // margin:10,
    },
    mainStyle: {
        width: '100%',
        justifyContent: 'center',
        height: '25%',
        backgroundColor: 'red',
        borderRadius: 25,
        flexDirection: 'row',
        flex: 1,
        margin:15
    }
});

//make this component available to the app
export default Contact;
