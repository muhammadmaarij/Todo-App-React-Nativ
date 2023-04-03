import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Todo = ({index, text, ondelete, onupdate}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderColor: 'green',
        width: 350,
        height: 50,
        borderRadius: 15,
        borderWidth: 1,
        margin: 15,
        marginLeft: 30,
        justifyContent: 'space-between',
      }}>
      <Text style={{fontSize: 24, top: 4, left: 10}}>{index}</Text>
      <TouchableOpacity onPress={onupdate}>
        <Text style={{fontSize: 24, top: 4, left: 10}}>{text}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{right: 10, top: 2}} onPress={ondelete}>
        <Icon name="trash" size={36} color="green" />
      </TouchableOpacity>
    </View>
  );
};

export default Todo;
