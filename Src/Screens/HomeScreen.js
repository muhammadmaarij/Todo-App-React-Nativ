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
  const [edit, setEdit] = useState(0);
  const [index, setIndex] = useState(999999);

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

  const onSubmitEdit = () => {
    editItem(index, text);
    setEdit(0);
  };

  const deleteItem = index => {
    const newData = data.filter((item, i) => i !== index);
    const updatedData = newData.map((item, index) => ({
      ...item,
      index: index + 1,
    }));
    setData(updatedData);
  };

  const editItem = (index, newText) => {
    console.log(index);
    console.log(newText);
    setEdit(1);
    const newData = [...data];
    newData[index] = {...newData[index], text: newText};
    setData(newData);
    setText('');
    Keyboard.dismiss();
    ToastAndroid.showWithGravity(
      'Item Updated',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };

  const components = (
    <ScrollView style={{marginBottom: 30}}>
      {data.map((item, index) => (
        <Todo
          key={item.key}
          index={item.index}
          text={item.text}
          ondelete={() => {
            deleteItem(index);
          }}
          onupdate={() => {
            setText(item.text);
            setIndex(item.index - 1);
            setEdit(1);
          }}
        />
      ))}
    </ScrollView>
  );
  return (
    <View style={{backgroundColor: 'yellow', height: 1000}}>
      <StatusBar backgroundColor="green" />
      <View
        style={{
          height: 55,
          width: 411,
          backgroundColor: 'green',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}>
        <Text style={{fontSize: 36, textAlign: 'center', color: 'white'}}>
          My Todo List
        </Text>
      </View>
      <View style={{flexDirection: 'row', top: 10, marginBottom: 20}}>
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
          right={<TextInput.Icon icon="plus" />}
        />
        {edit == 0 && (
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
              style={{
                fontSize: 20,
                top: 5,
                color: 'white',
                textAlign: 'center',
              }}>
              Submit
            </Text>
          </Button>
        )}
        {edit == 1 && (
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
            mode="contained"
            onPress={onSubmitEdit}>
            <Text
              style={{
                fontSize: 20,
                top: 5,
                color: 'white',
                textAlign: 'center',
              }}>
              Update
            </Text>
          </Button>
        )}
      </View>
      {components}
    </View>
  );
};

export default HomeScreen;
