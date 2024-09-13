import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput, FlatList} from 'react-native';
// IO
import io from 'socket.io-client';

const Home = () => {
  const [text, setText] = useState('');
  const [chatData, setChatData] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Initialize the socket connection
    const socketInstance = io.connect('http://ip:3001');

    // Set the socket instance in state
    setSocket(socketInstance);

    // get data
    socketInstance.on('chat message', msg => {
      setChatData(prevMessages => [msg, ...prevMessages]);
    });
  }, []);

  const submitMessage = () => {
    if (text.trim()) {
      // Ensure socket is defined before emitting
      if (socket) {
        console.log('Emitting message:', text);
        socket.emit('chat message', text);
        setText('');
      } else {
        console.error('Socket is not initialized');
      }
    }
  };

  return (
    <View>
      <Text style={styles.textColor}>Enter Message</Text>
      <View>
        <TextInput
          style={styles.input}
          onSubmitEditing={submitMessage}
          onChangeText={setText}
          value={text}
          placeholder="Type your message here"
          placeholderTextColor="#000000"
        />
      </View>
      <View>
        <FlatList
          data={chatData}
          renderItem={({item}) => <Text style={styles.textColor}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textColor: {
    color: '#000000',
    margin: 25,
    fontSize: 20,
  },
  input: {
    color: '#000000',
    height: 40,
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default Home;
