import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Susana');
  const [age, setAge] = useState('34');
  // const [person, setPerson] = useState({ name: 'Mario', age: 40 });

  // const clickHandler = () => {
  //   setName('Charlie');
  //   setPerson({ name: 'Luigi', age: 45 })
  // }

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput 
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={(val) => setName(val)} />

      <Text>Enter age:</Text>
      <TextInput 
        style={styles.input}
        placeholder='e.g. 37'
        onChangeText={(val) => setAge(val)} />

      <Text>name: {name}, age: {age}</Text>


        {/* <Text>My name is {name}</Text>
        <Text>His name is {person.name} and his age is {person.age}</Text>
        <View style={styles.buttonContainer}>
          <Button title='update state' onPress={clickHandler}/>
        </View>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
  // buttonContainer: {
  //   marginTop:20
  // },
});

