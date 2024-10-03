import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Screen5 = () => {
  return (
    <View
      style={{
        height:'100%',
        width:'auto',
        flex:1,
        justifyContent:'space-around',
        // alignItems:'center'
      }}
    >
      <View>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:24}}>LOGIN</Text>
      </View>
      <View
        style={{
          alignItems:'center'
        }}
      >
        <TextInput placeholder='Email' style={{
          height: 60,
          width: '86%',
          backgroundColor:'#F2F2F2',
          
      
        }}></TextInput>
        <TextInput secureTextEntry={true} placeholder='Password' style={{
          height: 60,
          width: '86%',
          backgroundColor:'#F2F2F2',
          marginTop:34
          
        }}></TextInput>
      </View>
      <View
        style={{
          alignItems:'center'
        }}      
      >
        <TouchableOpacity style={{
          width: '86%',
          height:60,
          backgroundColor:'#E53935',
          alignItems:'center',
          justifyContent:'center'
        }}>
          <TextInput style={{color:'white', fontWeight:'bold'}}>LOGIN</TextInput>
        </TouchableOpacity>
      </View>
      <View
      style={{
        alignItems:'center',
        height:'15%',
        justifyContent:'space-between'
      }}>
        <Text>When you agree to terms and conditions</Text>
        <Link href={''} style={{color:'#5D25FA'}}>For got your password?</Link>
        <Text>Or login with</Text>
      </View>
      <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: 320,
                    maxHeight: 50,
                    borderBlockColor: '#1593C6',
                    borderWidth: 1,
                }}>
                    <TouchableOpacity style={[
                        {
                            backgroundColor: '#3B5998',
                            flex: 1,
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                        },
                       
                    ]}>
                        <Text style={{
                            color: 'white',
                            fontSize: 30,
                            height: 48,
                            textAlign: 'center',
                        }}>
                            f
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[
                        {
                            backgroundColor: '#1593C6',
                            flex: 1,
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                        },
                    ]}>
                        <Text style={{
                            color: 'white',
                            fontSize: 30,
                            height: 48,
                            textAlign: 'center',
                        }}>
                            Z
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[
                        {
                            flex: 1,
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                        },
                       
                    ]}>
                        <Image style={{
                            width: 35,
                            height: 35,
                        }} source={{ uri: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png' }} />
                    </TouchableOpacity>
                </View>
            </View>
    </View>
  )
}

export default Screen5