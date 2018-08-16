import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator,NavigationScreenProp } from 'react-navigation';

export default class NestedSecondScreen extends React.Component<{
  navigation:NavigationScreenProp<{}, {}>,
},{}> {
  static navigationOptions = {
    title: 'Nest Second Screen',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Nest Second Screen</Text>
      </View>
    );
  }
}
