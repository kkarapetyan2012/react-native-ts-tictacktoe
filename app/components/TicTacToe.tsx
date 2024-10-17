import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native"

const TicTacToe = () => {
    const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [curentPlayer, setCurrentPlayer] = useState<string>('X');
  const [winner, setWinner] = useState<(string | null)>(null);

  const clickPressHandler = (index: number) => {
    if(!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = curentPlayer;
      const newPlayer = curentPlayer === 'X' ? 'O' : 'X';
      setBoard(newBoard);
      setCurrentPlayer(newPlayer);
      checkWinner(newBoard);
    }
  }

  const checkWinner = (board: (string | null)[]) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of winningLines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
      }
    }

    if (!board.includes(null) && !winner) {
      setWinner('Draw');
    }
  };

  function startNewGameHundler() {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  }
    return (
        <View>
            <View style={styles.cellContainer}>
        {board.map((cell, index) => 
          <Pressable 
            key={index}
            onPress={() => clickPressHandler(index)}
            // style={styles.cellButtonBlock}
          >
            <View style={styles.cellItem}>
              <Text style={styles.text}>{cell}</Text>
            </View>
          </Pressable>
        )}
      </View>
      {winner && <Text>
          {winner === 'Draw' ? 'No one to win' : `Player ${winner} is wins!`}
      </Text>}
      {winner && <Button title='New Game' onPress={startNewGameHundler} />}
        </View>
    )
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

export default TicTacToe