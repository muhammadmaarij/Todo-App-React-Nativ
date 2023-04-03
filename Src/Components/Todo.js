import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Todo = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderColor: 'lightblue',
        width: 350,
        height: 50,
        borderRadius: 15,
        borderWidth: 1,
        margin: 15,
        marginLeft: 30,
        justifyContent: 'space-between',
      }}>
      <Text style={{fontSize: 24, top: 4, left: 10}}>{props.index}</Text>
      <Text style={{fontSize: 24, top: 4, left: 10}}>{props.text}</Text>
      <TouchableOpacity style={{right: 10, top: 2}} onPress={() => {}}>
        <Icon name="trash" size={36} color="lightblue" />
      </TouchableOpacity>
    </View>
  );
};

export default Todo;
