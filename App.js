import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const filho = 'Angelo';
  const idade = 16;
  const [text, setText] = useState('');

  speak = () => {
    Speech.speak(text, {
      language: 'pt-BR'
    })
  }

  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input}
      onChangeText={e => setText(e)}
      placeholder='Digite alguma coisa'
      />
      <Button
      title='Falar'
      onPress={speak} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    widht: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#121212',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    color: '#000',
    fontSize: 20
  }
})