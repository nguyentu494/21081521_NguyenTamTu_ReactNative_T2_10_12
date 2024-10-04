import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Rating } from 'react-native-ratings';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import  images from '../../constants/images'
import ChooseColor from './ChooseColor';
import { useEffect, useState } from 'react';



export default function DetailProduct({navigation, route}) {
  const data = [{
        id:1,
        name:'Dien thoai Vsmart Joy 3 - Hang chinh hang',
        color:'xanh',
        img: images.vs_blue,
        manufacture:'Tiki trading',
        cost:1790000
    },
    {
        id:2,
        name:'Dien thoai Vsmart Joy 3 - Hang chinh hang',
        color:'red',
        img: images.vs_red,
        manufacture:'Tiki trading',
        cost:1790000
    },
    {
        id:3,
        name:'Dien thoai Vsmart Joy 3 - Hang chinh hang',
        color:'black',
        img: images.vs_black,
        manufacture:'Tiki trading',
        cost:1790000
    },
    {
        id:4,
        name:'Dien thoai Vsmart Joy 3 - Hang chinh hang',
        color:'silver',
        img: images.vs_silver,
        manufacture:'Tiki trading',
        cost:1790000
    }
  ]

  const [product, setProduct] = useState(data[0])

  useEffect (() => {
    if(route.params?.id)
      setProduct(data[route.params.id-1])
  },[route.params?.id]) 

  const chuyen = () => {
    navigation.navigate('ChooseColor', {dataRoute:data})
  }

  return (
    <View style={styles.container}>
        <View>
          <View>
            <Image source={product.img}/>
            <Text>{product.name}</Text>
          </View>
          <View style={styles.box}>
            <View style={styles.box1}>
              <Rating startingValue={5} imageSize={24} style={{alignSelf:'flex-start'}}/>
              <Text>{product.cost}d</Text>
              <Text>O dau re hon hoan tien</Text>
            </View>
            <View style={styles.box1}>
              <Text>(Xem 828 danh gia)</Text>
              <Text>1.790.000d</Text>
              <AntDesign name="questioncircleo" size={24} color="black" />
            </View>

          </View>
          <View>
            <TouchableOpacity style={styles.btnColor} onPress={chuyen}>
              <Text>4 MAU-CHON MAU</Text>
            </TouchableOpacity> 
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.btnBuy}>
                <Text style={{color:'white', fontWeight:'bold', fontSize:18}}>CHON MUA</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    height:'100%',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%'
  },
  box:{
    flexDirection:'row',
    marginTop:12,
    marginBottom:12,
    height:'20%',
    justifyContent:'space-between'
  },
  box1:{
    justifyContent: 'space-between'
  },
  btnColor:{
    marginTop:18,
    height:40,
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:18
  },
  btnBuy:{
    marginBottom:12,
    height:50,
    width:326,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:14
  }
});
