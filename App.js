import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import IconOcticon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';

const App = () => {
  const renderItem = ({ item }) => (
    <View style={{ backgroundColor: "pink", marginBottom: 10, }}>
      <Text style={{ fontSize: 32 }}>Id: {item.id}</Text>
      <Text style={{ fontSize: 20 }}>Name: {item.name}</Text>
      <Text style={{ fontSize: 20 }}>Email: {item.email}</Text>
      <Text style={{ fontSize: 20 }}>Gender: {item.gender}</Text>
      <Text style={{ fontSize: 20 }}>Status: {item.status}</Text>
    </View>
  );

  const [mydata, setData] = useState([])

  useEffect(() => {
    getData()

    return () => {

    }
  }, [])

  var getData = async () => {
    var api = await axios.get('https://gorest.co.in/public/v2/users')
    // console.log("REST: " + api.data[0].name)
    setData(api.data)
  }


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <IconOcticon name="meh" color={'red'} size={100} style={{ textAlign: 'center', marginBottom: 20 }} />
      </View>
      <FlatList
        data={mydata}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;