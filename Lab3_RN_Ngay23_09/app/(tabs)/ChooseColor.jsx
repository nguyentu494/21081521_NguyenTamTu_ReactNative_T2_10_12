import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import  images from '../../constants/images'
import DetailProduct from './DetailProduct'

const ChooseColor = ({navigation, route}) => {
    const data = route.params.dataRoute
    const [product, setProduct] = useState(data[0])
    const click = (id) => {
        setProduct(data[id-1])
    }
    const chuyen = () => {
      navigation.navigate('DetailProduct', {id: product.id})
    }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={product.img}
            style={{ width: 130, height: 140, resizeMode: 'contain' }}
          />
        </View>
        <View style={{ justifyContent: 'space-evenly' }}>
          <Text style={{ fontSize: 15, width: 220 }}>{product.name}</Text>
          <Text style={{ fontSize: 15, width: 220 }}>Color: {product.color}</Text>
          <Text style={{ fontSize: 15, width: 220 }}>Cung cấp bởi <Text style={{ fontWeight: 'bold' }}>{product.manufacture}</Text></Text>
          <Text style={{ fontSize: 15, width: 220, fontWeight: 'bold' }}>{product.cost} đ</Text>
        </View>
      </View>

      <View style={{ flex: 4, justifyContent: 'space-evenly' }}>
        <Text style={{ fontSize: 17, marginLeft: 20 }}>Chọn một màu bên dưới:</Text>
        <View style={{ alignItems: 'center', justifyContent: 'space-around', height: 450 }}>
          <TouchableOpacity onPress={() => click(4)} style={{ width: 100, height: 100, backgroundColor: '#C5F1FB' }} />
          <TouchableOpacity onPress={() => click(2)} style={{ width: 100, height: 100, backgroundColor: 'red' }} />
          <TouchableOpacity onPress={() => click(3)} style={{ width: 100, height: 100, backgroundColor: 'black' }} />
          <TouchableOpacity onPress={() => click(1)} style={{ width: 100, height: 100, backgroundColor: '#234896' }} />
        </View>
        <TouchableOpacity style={{
          height: 50,
          backgroundColor: '#4D6DC1',
          borderRadius: 10,
          margin: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
          onPress={chuyen}>
          <Text style={{
            fontSize: 20,
            textTransform: 'uppercase',
            color: '#fff',
            fontWeight: 'bold',
          }}>Xong</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default ChooseColor