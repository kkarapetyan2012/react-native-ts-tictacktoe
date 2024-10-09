import { useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, Pressable } from 'react-native';

export default function HomeScreen() {
  const [board, setBoard] = useState(Array(9).fill(null));
  // const [state, setState] = useState()
  return (
    <View style={styles.container}>
      <Text>Tik Tac Toe</Text>
      <View style={styles.cellContainer}>
        {board.map((cell, index) => 
          <Pressable 
            key={index}
            onPress={() => console.log(index)}
          >
            <View style={styles.cellItem}>
              <Text>{cell}</Text>
            </View>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    backgroundColor: 'red',
    margin: 80,
  },
  cellContainer: {

  },
  cellItem: {
    width: 120,
    height: 120,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#000',
  }
});
