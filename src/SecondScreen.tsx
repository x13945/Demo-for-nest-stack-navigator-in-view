import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "react-navigation";
import NestedFirstScreen from "./NestedFirstScreen";
import NestedSecondScreen from "./NestedSecondScreen";

let NestedStackNavigator = createStackNavigator(
  {
    NestFirstScreen: {
      screen: NestedFirstScreen
    },
    NestSecondScreen: {
      screen: NestedSecondScreen
    }
  },
  {
    initialRouteName: "NestFirstScreen"
  }
);

export default class SecondScreen extends React.Component {
  static navigationOptions = {
    title: "Second Screen"
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "stretch" , flexDirection: 'row'}}>
        <Text
          style={{
            flex: 1,
            backgroundColor: "grey"
          }}
        >
          Second Screen
        </Text>
        {/* <View style={{ flex: 1, backgroundColor: "green" }}> */}
        <NestedStackNavigator style={{ flex: 1, backgroundColor: "green" }} />
        {/* </View> */}
      </View>
    );
  }
}
