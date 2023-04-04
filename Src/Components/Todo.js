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
        maxHeight: 200,
        borderRadius: 15,
        borderWidth: 1,
        margin: 15,
        marginLeft: 30,
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: 'green',
            height: 33,
            width: 22,
            margin: 7,
            marginLeft: 15,
            borderRadius: 1,
          }}>
          <Text
            style={{
              fontSize: 24,
              color: 'white',
              textAlign: 'center',
            }}>
            {index}
          </Text>
        </View>
        <TouchableOpacity style={{}} onPress={onupdate}>
          <Text
            style={{
              fontSize: 24,
              top: 7,
              left: 10,
              color: 'green',
              maxWidth: 200,
              marginBottom: 10,
            }}>
            {text}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{right: 10, top: 5}} onPress={ondelete}>
        <Icon name="trash" size={36} color="green" />
      </TouchableOpacity>
    </View>
  );
};

export default Todo;
