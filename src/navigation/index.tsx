import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MarketplaceScreen } from "../screens/MarketplaceScreen";
import { DetailScreen } from "../screens/DetailScreen";
import TaskDetailScreen from "../components/TaskDetailScreen";

export type RootStackParamList = {
  Marketplace: undefined;
  Detail: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Marketplace" component={MarketplaceScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
