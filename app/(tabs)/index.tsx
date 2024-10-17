import { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Button } from 'react-native';
import TicTacToe from '../components/TicTacToe';

export default function HomeScreen() {
  

  return (
    <View style={styles.container}>
      <Text>Tik Tac Toe</Text>      
      <TicTacToe />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    // backgroundColor: 'red',
    margin: 80,
  },
  cellContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  cellItem: {
    width: 120,
    height: 120,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#000',
  },
  text: {
    fontSize: 36,
  }
});
