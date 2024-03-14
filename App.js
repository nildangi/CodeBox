import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Drawer from './src/DrawerNavigation/Drawer'
import Axios from 'axios'

import { albumPhotosurl } from './src/utils/url'
const App = () => {

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetchApiData();
  }, [])

  const fetchApiData = async () => {
    try {
      const response = await Axios.get(albumPhotosurl)
      console.log(response.data);
      setPostData(response.data)
    }
    catch (err) {

      console.log(list)
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewStyle} >
        {/* card start */}
        {postData.map((list, index) => {
          return (
            <View style={styles.cardContainer} key={list.id}>
              <Image source={{ uri: list.url }}
                style={styles.cardImage}
              />
              <Text style={styles.cardTextTitle}>{list.title}</Text>
              {/* <Text>Hellos</Text> */}
            </View>

          )
        })}

      </ScrollView>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#F2F3F4',
    justifyContent:'center',
    alignContent:'center'
  },
  scrollViewStyle: {
  },
  cardContainer: {
    width:'98%',
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'center',
    backgroundColor: '#ffff',
    marginVertical: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,

  },
  cardImage: {
    width: '100%',
    height: 300,
    borderRadius: 20,

  },
  cardTextTitle: {
    marginVertical: 10,
    textAlign: 'center'
  },

})

export default App;

const obj = {
  albumId: 1,
  id: 1,
  thumbnailUrl: "https://via.placeholder.com/150/92c952",
  title: "accusamus beatae ad facilis cum similique qui sunt",
  url: "https://via.placeholder.com/600/92c952",
}