import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import TextField from './Src/Components/TextField';
import HomeScreen from './Src/Screens/HomeScreen';

// export default class Lab1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   render() {
//     return (
//       <View style={styles.parentView}>
//         <Text style={styles.child}>Hello World</Text>
//       </View>
//     );
//   }
// }
export default function App() {
  return (
    <View>
      <HomeScreen />
      {/* <Calculator /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  flag: {
    flexDirection: 'row',
    width: '60%',
  },
  greenPart: {
    backgroundColor: 'green',
    width: '20%',
    height: 60,
  },
  whitePart: {
    backgroundColor: 'white',
    height: 60,
    width: '40%',
  },
  parentView: {
    alignItems: 'center',
  },
  child: {
    color: 'red',
  },
});
