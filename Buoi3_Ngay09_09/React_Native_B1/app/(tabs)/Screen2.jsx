import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'

const Screen2 = () => {
  return (
    <LinearGradient
            style={{
                flex: 1,
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
                    flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                }}>
                <View
                    style={{
                        width: 150,
                        height: 150,
                        borderWidth: 20,
                        borderRadius: 100,
                    }}></View>
            </View>

            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        fontSize: 30,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}>
                    Grow {'\n'} your business
                </Text>
            </View>

            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>
                    We will help you to grow your business using online server
                </Text>
            </View>

            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'flex-end',
                }}>
                <TouchableOpacity
                    style={{
                        width: 120,
                        height: 50,
                        backgroundColor: '#E3C000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        marginBottom: 15
                    }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            fontSize: 20,
                        }}>
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: 120,
                        height: 50,
                        backgroundColor: '#E3C000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        marginBottom: 15
                    }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            fontSize: 20,
                        }}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flex: 1,
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                }}>
                    How we work?
                </Text>
            </View>
        </LinearGradient>
  )
}

export default Screen2