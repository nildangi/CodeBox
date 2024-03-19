// //import liraries
// import React, { Component, useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import axios from 'axios';


// // create a component
// const About = ({ navigation }) => {
//     const [data, setData] = useState(null);
//     function handleNavigation(screenName) {
//         navigation.navigate(screenName)
//     }
//     useEffect(() => {
//         const baseUrl = "https://jsonplaceholder.typicode.com/posts/1";
//         axios.get(baseUrl)
//             .then(response => {
//                 setData(response.data)
//             })
//             .catch(error => {
//                 console.error("Error Fetching Data:", error);
//             })
//     }, []);
//     return (
//         <View style={styles.container}>
//             <Text>About</Text>
//             <View>
//                 <TouchableOpacity onPress={() => handleNavigation('Contact')}>
//                     <Text>Go to Contact</Text>
//                 </TouchableOpacity>
//             </View>
//             {
//                 data ?

//                     <View>
//                         <Text style={{ backgroundColor: 'red' }}>{data.id}</Text>
//                         <Text style={{ backgroundColor: 'lightpink' }}>{data.title}</Text>
//                         <Text style={{ backgroundColor: 'lightyellow' }}>{data.body}</Text>
//                     </View>
//                     : null}
//         </View>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#5F6A6A',
//     },
// });

// //make this component available to the app
// export default About;



import axios from 'axios';
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';


const About = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const baseUrl = "https://app.aforro.in/api/product/list/";
        axios.get(baseUrl)
            .then(response => {
                // setData(response.data)
                const firstFourProducts = response.data.result.slice(0, 4);
                setData(firstFourProducts);

            })
            .catch(error => {
                console.error("Error Fetching Data:", error);
            })
    }, []);
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={{ fontWeight: '600', color: '#FFFF', fontSize: 22 }}>Review item</Text>
                <View style={{ backgroundColor: '#FFFF', marginTop: 20, flex: 1, width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                    {data && data.map((item, index) => (
                        <View key={index} style={{ flex: 1, flexDirection: 'row', margin: 10, justifyContent: 'space-around', alignContent: 'center', alignItems: 'center' }}>
                            <View
                                style={{}}>
                                <Image
                                    style={{ width: 100, height: 100, borderRadius: 20, marginRight: 10, borderWidth: 0.1, borderColor: 'black', borderRadius: 15 }}
                                    source={{ uri: item.image }} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 12 }}>{item.brand}</Text>
                                <></>
                                <Text style={{ fontSize: 15, fontWeight: '900' }}>{item.name}</Text>
                                <Text style={{ fontSize: 12 }}>{item.variety.weight}gm</Text>
                                <Text style={{ fontSize: 17, fontWeight: '900' }}>Price: {item.variety.selling_price}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                                <View style={{ width: 80, height: 40, justifyContent: 'space-around', alignContent: 'center', flexDirection: 'row', borderColor: '#0000', borderWidth: 1, borderColor: 'black', borderRadius: 10 }}>
                                    <Image
                                        style={{ width: 10, height: 10, alignSelf: 'center' }}
                                        source={require('../../data/minus.png')} />
                                    <Text style={{ margin: 2, alignSelf: 'center' }}>1</Text>
                                    <Image
                                        style={{ width: 10, height: 10, alignSelf: 'center' }}
                                        source={require('../../data/plus.png')} /></View>
                                <View style={{ justifyContent: 'center' }}>
                                    <Image
                                        style={{ width: 25, height: 25, alignSelf: 'center', margin: 5 }}
                                        source={require('../../data/trash.png')} />
                                </View>
                            </View>
                        </View>
                    ))}
                    <View style={{ height: 0.4, width: '80%', backgroundColor: 'black', alignSelf: 'center' }}></View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                    <View style={{ flex: 0.6, backgroundColor: '#FFFF', justifyContent: 'space-between', flexDirection: 'row', width: '100%', alignContent: 'center', alignSelf: 'center' }}>
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={require('../../data/discount.png')} />
                        <Text style={{ fontWeight: '700' }}>SAVE60 Applied{'\n'}
                            You saved 49 with this coupon
                        </Text>
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={require('../../data/cross.png')} />
                    </View>
                    <View style={{ flex: 3, backgroundColor: '#FFFF' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                            <Text>Coupon Applied -(SAVE60)</Text>
                            <Text style={{ color: 'green' }}>-49</Text></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                            <Text>Packaging Fee</Text>
                            <Text style={{ color: 'green' }}>0</Text></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                            <Text>Extra Charges:-</Text>
                            <Text></Text></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                            <Text>Delivery charge</Text>
                            <Text>FREE</Text></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                            <Text style={{ color: 'black', fontSize: 20, fontWeight: '700' }}>Bill Total</Text>
                            <Text style={{ color: 'black', fontSize: 20, fontWeight: '700' }}>1363.00</Text></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                            <Text style={{ color: 'orange', fontWeight: '500', fontSize: 20 }}>Your total savings</Text>
                            <Text style={{ color: 'orange', fontWeight: '500', fontSize: 20 }}>20.00</Text></View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
    },
});


export default About;
