import {View} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';

const TextField = onPressHandler => {
  const [text, setText] = useState('');
  return (
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
        style={{width: 100, height: 50, marginTop: 20}}
        icon="camera"
        mode="contained"
        onPress={() => {
          onPressHandler;
          setText('');
        }}>
        Submit
      </Button>
    </View>
  );
};

export default TextField;
