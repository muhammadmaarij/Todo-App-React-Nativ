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

  const components = data.map(item => (
    <Todo index={item.index} text={item.text} />
  ));
  return (
    <View>
      <StatusBar backgroundColor="lightblue" />
      <View style={{height: 55, width: 420, backgroundColor: 'lightblue'}}>
        <Text style={{fontSize: 36, textAlign: 'center', color: 'white'}}>
          My Todo List
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          mode="outlined"
          label="Enter todo"
          value={text}
          onChangeText={text => setText(text)}
          style={{height: 50, width: 250, margin: 15}}
          right={<TextInput.Icon icon="cloud-upload" />}
        />
        <Button
          style={{
            width: 110,
            height: 50,
            marginTop: 20,
            backgroundColor: 'lightblue',
            borderRadius: 10,
          }}
          disabled={text.length == 0 ? true : false}
          //   icon="camera"
          mode="contained"
          //   buttonColor='green'
          onPress={handleSubmit}>
          <Text style={{fontSize: 18, top: 5}}>Submit</Text>
        </Button>
      </View>
      <ScrollView style={{marginBottom: 30}}>{components}</ScrollView>
    </View>
  );
};

export default HomeScreen;
