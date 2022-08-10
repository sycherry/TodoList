import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Authentication } from "../screens/authentication";
import { Home } from "../screens/home";

export type NavigatorParamList = {
  Authentication: any
  Home: any
}
export default function RootNavigation() {
  const Stack = createStackNavigator<NavigatorParamList>();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Authentication" screenOptions={screenOptions}>
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
