import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {useReducer, useEffect} from 'react'

const tasks = [
  "To check email",
  "UI task web page",
  "Learn javascript basic",
  "Learn HTML Advance",
  "Medical App UI",
  "Learn Java"
];



const App = () => {
  var reducer = (state = {toDo: tasks}, action) =>{
    switch(action.type){
      case "add":{
          const lstTodo = state.toDo.concat("learn c++")
          return {toDo: lstTodo};
      }
      default: return state;

    }
  }

  useEffect (() =>{
    console.log(state)
  }, [state])

  var [state, dispatch] = useReducer(reducer, {toDo: tasks});

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather name="arrow-left" size={24} color="black" />
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/100' }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.greeting}>Hi Twinkle</Text>
            <Text style={styles.subGreeting}>Have agreat day a head</Text>
          </View>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="gray"
        />
      </View>

      <ScrollView style={styles.taskList}>
        <FlatList
          data={state.toDo}
          renderItem={(task)=>{
              return(
                <View style={styles.taskItem}>
                  <View style={styles.checkboxContainer}>
                    <View style={styles.checkbox} />
                  </View>
                  <Text style={styles.taskText}>{task.item}</Text>
                  <Feather name="edit-2" size={20} color="red" />
                </View>
              )
          }}
        />
      </ScrollView>

      <TouchableOpacity style={styles.fab} onPress={()=>{
        dispatch({type:'add'})
      }}>
        <Feather name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 14,
    color: 'gray',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  taskList: {
    flex: 1,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 15,
  },
  checkboxContainer: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    width: 14,
    height: 14,
    backgroundColor: 'green',
    borderRadius: 2,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  fab: {
    alignSelf:'center',
    backgroundColor: '#007AFF',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App