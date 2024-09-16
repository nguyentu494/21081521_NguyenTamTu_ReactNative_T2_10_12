import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={{}}>
        <View style={styles.circle}></View>
      </View>
      <View>
        <Text style={styles.title}>GROW</Text>
        <Text style={styles.title}>YOUR BUSINESS</Text>
      </View>
      <View>
        <Text style={styles.description}>We will help you to grow your business using</Text>
        <Text style={styles.description}>online server</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row', width:'100%', justifyContent:'space-around'}}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.description}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.description}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#00CCF9',
    width: '100%',
    height: '100%',
    alignItems:'center',
    justifyContent:'space-around'
  },
  circle:{
    height:150,
    width:150,
    borderColor:'black',
    borderRadius:75,
    borderWidth:15,
    
  },
  title:{
    textAlign:'center',
    fontSize:24,
    fontWeight:'bold',
  },
  description:{
    textAlign:'center',
    fontSize:16,
    fontWeight:'bold'
  },
  btn:{
    
    
    width:119,
    height:48,
    backgroundColor:'#E3C000',
    borderRadius:14,
    alignItems:'center',
    justifyContent:'center',

  }
});
