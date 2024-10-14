import { Image, StyleSheet, Text, TouchableOpacity, View,TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import screen2 from './screen2'

export default function screen1({ navigation}) {
  return (
    <View style={styles.container}>
      <View style={{width:271, height:271, borderWidth:1}}>

      </View>
      <View>
        <Text style={styles.title}>
          MANAGE YOUR
        </Text>
        <Text style={styles.title}>
          TASK
        </Text>
      </View>
      <View>
        <TextInput placeholder={'Enter your name'} style={styles.txtInName}/>
      </View>
      <View>
        <TouchableOpacity style={styles.btnStart}  onPress={()=>{
            navigation.navigate("screen2")
          }}>
          <Text style={{fontSize:16, color:'white'}}>
            Get started -&gt;
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    
);}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  title:{
    color:'#8353E2',
    fontWeight:'bold',
    fontSize:34,
    textAlign:'center',
  },
  txtInName:{
    width:334,
    height:43,
    borderWidth:1,
    borderRadius:12,
    padding:12
  },
  btnStart:{
    width:190,
    height:44,
    backgroundColor:'#00BDD6',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:12
  }
});
