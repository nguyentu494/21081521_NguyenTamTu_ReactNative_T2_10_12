import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';

export default function App() {
  const[num, setNum] = useState(1)
  return (
    <View style={{
      justifyContent:'space-around'
    }}>
      <View style={style.container}>
        <View style={style.box1}>
          <Image source={require('../assets/book.png')}/>

          <View>
            <Text style={style.title}>
              Nguyên hàm tích phân và ứng dụng
            </Text >
            <Text style={style.title}>
              Cung cấp bởi Tiki Trading
            </Text>
            <Text style={style.price}>
              141.800 đ
            </Text>
            <Text style={style.oldPrice}>
              141.800 đ
            </Text>
            <View style={style.boxCount}>
              <View style={style.num}>
                <TouchableOpacity style={style.btnCount} onPress={() => {
                  if(num>1)
                    setNum(num-1)
                }}>
                  <AntDesign name="minus" size={12} color="black" />
                </TouchableOpacity>
                <Text  style={style.txtCount}>{num}</Text>
                <TouchableOpacity style={style.btnCount} onPress={() => {
                  setNum(num+1)
                }}>
                  <AntDesign name="plus" size={12} color="black" />
                </TouchableOpacity>
              </View>
              <View >
                <Text style={{color:'#134FEC', fontWeight:'bold'}}>Mua sau</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={style.boxSale}>
            <View style={style.sale}>
              <Text>Ma giam gia da luu</Text>
              <Text style={{color:'blue', fontWeight:'bold', marginLeft:12}}>Xem tai day</Text>
            </View>
            <View style={style.sale} >
              <TouchableOpacity style={{
                borderWidth:1,
                width:"50%",
                height:50,
                justifyContent:'center',
                alignItems:'center'
              }}>
                <Text style={{fontWeight:'bold'}}>Ma giam gia</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                width:"30%",
                height:50,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:"blue"
              }}>
                <Text style={{fontWeight:'bold', color:"white"}}>Ap dung</Text>
              </TouchableOpacity>
            </View>
        </View>

        <View style={{
          marginTop:12,
          backgroundColor:'white',
          width:"100%",
          height:50,
          justifyContent:'center'
        }}>
            <View style={style.sale}>
              <Text style={{fontSize:10}}>Ban co phieu qua tangg Tiki/Got it/Urbox</Text>
              <Text style={{color:'blue', marginLeft:12, fontSize:10}}>Nhap tai day</Text>
            </View>
            
        </View>

        <View style={{
          marginTop:12,
          backgroundColor:'white',
          width:"100%",
          height:50,
          justifyContent:'center'
        }}>
            <View style={style.sale}>
              <Text style={{fontSize:14, fontWeight:'bold'}}>Tam tinh</Text>
              <Text style={{color:'red', fontSize:14, fontWeight:'bold'}}>{num*141800}d</Text>
            </View>
            
        </View>
        
      </View>
      <View style={{
        backgroundColor:'white',
        width:"100%",
        height:50,
        height:"15%",
      }}>
          <View style={style.sale}>
            <Text style={{fontSize:14, fontWeight:'bold', color:'gray'}}>Thanh tien</Text>
            <Text style={{color:'red', fontSize:14, fontWeight:'bold'}}>{num*141800}d</Text>
          </View>
          <TouchableOpacity style={{backgroundColor:'red',
            width:'90%',
            marginLeft:'auto',
            marginRight:'auto',
            alignItems:'center',
            justifyContent:'center',
            height:50,
            marginTop:12
          }}>
              <Text style={{color:'white', fontWeight:'bold', fontSize:20}}>TIEN HANH DAT HANG</Text>
            </TouchableOpacity>
      </View>
    </View>
    
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor:'#C4C4C4',
    width:'100%',
    height:'80%',
    marginTop: '10%'
  },
  box1:{
    width:'100%',
    display: 'flex',
    flexDirection:'row',
    backgroundColor:'white',
    padding: 12,
    justifyContent:'space-around'
  },
  title:{
    fontSize:12,
    fontWeight:'bold',

  },
  price:{
    fontSize:14,
    fontWeight:'bold',
    color:'red'
  },
  oldPrice:{
    fontSize:12,
    color:'#808080',
    fontWeight:'bold',
    fontStyle:'italic'
  },
  num:{
    display:'flex',
    flexDirection:'row',
    width:'30%',
    justifyContent:'space-between',

  },
  boxSale:{
    width:'100%',
    display: 'flex',
    flexDirection:'column',
    backgroundColor:'white',
    padding: 12,
    justifyContent:'space-between',
    height:"20%",
    paddingBottom:40
    // marginTop:12
  },
  btnCount:{
    width:14,
    height:16,
    backgroundColor:'#C4C4C4',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  txtCount:{
    fontSize:14,
    fontWeight:'bold',
    
  },
  boxCount:{
    paddingTop:12,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  sale:{
    flexDirection:'row',
    paddingLeft:12,
    justifyContent:'space-between',
    paddingRight:12
  }
});
