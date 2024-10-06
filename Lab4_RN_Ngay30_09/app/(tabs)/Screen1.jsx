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
import { router } from 'expo-router';
import index from '../index';
import ComButton from '../../components/ComButton';


const Item = ({item, onPress, backgroundColor, textColor}) => (
  <View style={styles.product}>
    <View style={styles.item}>
      <Image source={{uri:item.png}} style={{height:74, width:74}}/>
      <View style={styles.title}>
        <Text style={{fontSize:18, fontWeight:'bold'}}>{item.title}</Text>
        <Text >{item.manufacture}</Text>
      </View>
      
    </View>
    <ComButton 
      bgColor='red'
      onPress={()=>{}}
      title='chat'
    />
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
      <Text style={{height: 50,
        textAlign:'center',
        fontSize:16,
        
      }}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
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
    backgroundColor:'white',
    borderTopWidth:2,
    borderColor:'#C4C4C4',
    height:80,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  item: {
    flex: 1,
    flexDirection:'row'
  },
  title:{
    marginLeft:8
  }
});

export default App;