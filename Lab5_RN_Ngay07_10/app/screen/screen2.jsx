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
import index from './screen1'


const Item = ({item, onPress, backgroundColor, textColor}) => (
  <View style={styles.product}>
    <View style={styles.item}>
      <View style={styles.title}>
        <Text style={{fontSize:18, fontWeight:'bold'}}>{item.subject}</Text>
      </View>
      
    </View>
  </View>
);

const App = () => {
  const [DATA, setDATA] = useState(() => {
    fetch('https://6458b0cb4eb3f674df7a6ab2.mockapi.io/user')
    .then(res=>res.json())
    .then(data=>{
        setDATA(data)
        
    })
  })
  const [selectedId, setSelectedId] = useState();
  const [isLoading, setIsLoading] = useState(false);


  const user = {
    "id" : 8,
    "subject":"a++"
  }

  useEffect = (() =>{
    fetch('https://6458b0cb4eb3f674df7a6ab2.mockapi.io/user')
    .then(res=>res.json())
    .then(data=>{
        setDATA(data)
        
    })
  }, [isLoading])

  const add = () =>{
    setIsLoading(true)
    fetch('https://6458b0cb4eb3f674df7a6ab2.mockapi.io/user',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    console.log('Form submitted successfully!');
    setIsLoading(false)
  }

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
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
      <TouchableOpacity style={{width:200, height:40, alignSelf:'center', backgroundColor:'aqua', justifyContent:'center'}} onPress={add}>
        <Text style={{textAlign:'center', fontWeight:'bold'}}>Add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
    flexDirection:'row',
    

  },
  title:{
    marginLeft:8
  }
});

export default App;