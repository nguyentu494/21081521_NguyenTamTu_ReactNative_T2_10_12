import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import { router } from 'expo-router';
import index from '../index';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <View style={styles.product}>
    <View style={styles.item}>
      <Image source={{uri:item.png}} style={{height:90, width:155, alignSelf:'center'}}/>
      <View style={styles.title}>
        <Text style={{fontSize:14, height:40}} numberOfLines={2}>{item.title}</Text>
        <View style={{flexDirection:'row'}}>
          <Rating startingValue={5} imageSize={12} style={{alignSelf:'center'}}/>
          <Text style={{fontSize:12, paddingLeft:8}}>(15)</Text>
        </View>
        <View style={{flexDirection:'row', marginTop:4}}>
          <Text style={{fontSize:12, fontWeight:'bold'}}>69.900d</Text>
          <Text style={{fontSize:12, paddingLeft:8, color:'gray'}}>-39%</Text>
        </View>
      </View>
    </View>
  </View>
);

const App = () => {
  const [DATA, setDATA] = useState(() => {
    fetch('https://66fa760cafc569e13a9bdb94.mockapi.io/api/products/product')
    .then(res=>res.json())
    .then(data=>{
        setDATA(data)
        
    })
  })
  const [selectedId, setSelectedId] = useState();
  

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {router.push(index)}}>
          <Text style={{color:'white'}}>Return</Text>
        </TouchableOpacity>
        <Text style={{color:'white'}}>Chat</Text>
        <Text style={{color:'white'}}>Cart</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  header:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#1BA9FF',
    height:42,
    alignItems:'center'

  },
  product:{
    marginTop:12,
    borderColor:'#C4C4C4',
    height:80,
    width:'50%',
    height:'15%'
  },
  item: {
    flex: 1,
    justifyContent:'center',
  },
  title:{
    marginLeft:8
  }
});

export default App;