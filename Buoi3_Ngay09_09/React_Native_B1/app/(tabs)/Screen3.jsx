import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'

const Screen3 = () => {
  return (
    <LinearGradient
            style={{
                flex: 1,
                backgroundColor: '#00ccf9',
            }}
            colors={['#C7F3F6', '#E6E6E6', '#00ccf9']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            locations={[0.5, 0.85, 0.95]}
        >
  <TouchableOpacity style={{width:50,height:30,
                    backgroundColor:'gray', 
                    borderRadius:4,
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop:12,
                    marginLeft:8
                }} onPress={()=>{router.back()}}>
                    <Text style={{color:'white'}}>
                        Home
                    </Text>
            </TouchableOpacity>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        fontSize: 30,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}>
                    forget {'\n'} password
                </Text>
            </View>

            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        paddingLeft: 20,
                        paddingRight: 20,
                    }}>
                    Provide your account's email for which you want to reset your password
                </Text>
            </View>

            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}>
                <View
                    style={{
                        width: 320,
                        height: 50,
                        backgroundColor: '#C4C4C4',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    <TextInput
                        style={{
                            fontSize: 18,
                        }}
                        placeholder="Email"
                        onChangeText={text => setText(text)}
                    />
                </View>

            </View>

            <View
                style={{
                    flex: 2,
                    alignItems: 'center',
                }}>
                <TouchableOpacity
                    style={{
                        width: 320,
                        height: 50,
                        backgroundColor: '#E3C000',
                        justifyContent: 'center',
                    }}>

                    <Text style={{
                        fontSize: 20,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
  )
}

export default Screen3