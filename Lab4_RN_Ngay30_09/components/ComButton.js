import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ComButton({bgColor, onPress, title }) {
  const style = styles(bgColor)
  return (
    <>
      <TouchableOpacity style={style.btn} onPress={onPress}>
        <Text style={style.title}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles =  (bgColor) => { 
  const style = StyleSheet.create({
    btn:{
      width: 88,
      height: 38,
      alignSelf:'center',
      backgroundColor:bgColor,
      justifyContent:'center',
      alignItems:'center'
    },
    title:{
      color:'white',
      fontSize:22
    }
  })

  return style;
}

