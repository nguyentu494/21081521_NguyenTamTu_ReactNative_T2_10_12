import React, {useEffect, useState} from 'react';
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
import index from './Screen1'

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

  const [DATA, setDATA] = useState([{
    "id":1,
    "subject":"React Native"
  }])
  const [selectedId, setSelectedId] = useState();
  const [isLoading, setIsLoading] = useState(false);


  const user = {
    "id" : 8,
    "subject":"r++"
  }
  
  // useEffect(() =>{
  //   setTimeout(() => {
  //     console.log("Loading")
  //     fetch('https://6458b0cb4eb3f674df7a6ab2.mockapi.io/user')
  //     .then((response) => response.json())
  //     .then((json) => setDATA(json))
  //   },2000)
  // }, [isLoading])


  

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
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text>
            &lt;-
          </Text>
        </TouchableOpacity>
        <View style={styles.profile}>
          <Image source={require('../../img/Rectangle.png')}/>
          <Text style={{
            flexDirection:'column',
            alignItems:'center',
            textAlign:'center'
          }}>
            Hi Twinkle{'\n'}
            <Text>Have a agrate day a head</Text>
          </Text>
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
      <TouchableOpacity style={{width:200, height:40, alignSelf:'center', backgroundColor:'aqua', justifyContent:'center'}} onPress={add}>
        <Text style={{textAlign:'center', fontWeight:'bold'}}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  header:{
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  profile:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
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
    flexDirection:'row',
    

  },
  title:{
    marginLeft:8
  }
});

export default App;