import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Keyboard,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';
import Todo from '../Components/Todo';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');

  const handleSubmit = () => {
    setData([
      ...data,
      {key: Math.random().toString(), index: data.length + 1, text: text},
    ]);
    setText('');
    Keyboard.dismiss();
    ToastAndroid.showWithGravity(
      'Item Added',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };

  const deleteItem = index => {
    const newData = data.filter((item, i) => i !== index);
    setData(newData);
  };

  const components = (
    <ScrollView style={{marginBottom: 30}}>
      {data.map((item, index) => (
        <Todo
          key={item.key}
          index={item.index}
          text={item.text}
          ondelete={() => deleteItem(index)}
          onupdate={() => {}}
        />
      ))}
    </ScrollView>
  );
  return (
    <View style={{backgroundColor: 'yellow', height: 1000}}>
      <StatusBar backgroundColor="green" />
      <View style={{height: 55, width: 420, backgroundColor: 'green'}}>
        <Text style={{fontSize: 36, textAlign: 'center', color: 'white'}}>
          My Todo List
        </Text>
      </View>
      <View style={{flexDirection: 'row', top: 10, marginBottom:20}}>
        <TextInput
          mode="outlined"
          label="Enter todo"
          value={text}
          onChangeText={text => setText(text)}
          style={{
            height: 50,
            width: 250,
            margin: 15,
            backgroundColor: 'yellow',
          }}
          theme={{
            colors: {
              primary: 'green', // Change outline color when not focused
              text: '', // Change text color
              placeholder: 'green', // Change placeholder color
            },
          }}
          right={<TextInput.Icon icon="cloud-upload" />}
        />
        <Button
          style={{
            width: 115,
            height: 50,
            marginTop: 20,
            backgroundColor: 'green',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          disabled={text.length == 0 ? true : false}
          //   icon="camera"
          mode="contained"
          //   buttonColor='green'
          onPress={handleSubmit}>
          <Text
            style={{fontSize: 20, top: 5, color: 'white', textAlign: 'center'}}>
            Submit
          </Text>
        </Button>
      </View>
      {components}
    </View>
  );
};

export default HomeScreen;
