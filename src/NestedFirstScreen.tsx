import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator,NavigationScreenProp } from 'react-navigation';

export default class NestedFirstScreen extends React.Component<{
  navigation:NavigationScreenProp<{}, {}>,
},{}> {
  static navigationOptions = {
    title: 'Nest First Screen',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Nest Home Screen</Text>
        <Button
        title='Nav to second screen'
        onPress={()=>this.props.navigation.navigate('NestSecondScreen')}
        ></Button>
      </View>
    );
  }
}
