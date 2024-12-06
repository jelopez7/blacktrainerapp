import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { screen } from "../utils";
import AccountScreen from "../screens/Account/AccountScreen";
import LoginScreen from "../screens/Account/LoginScreen";

const Stack = createNativeStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.account.account}
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screen.account.login}
        component={LoginScreen}
        options={{ title: "Iniciar sesión" }}
      />
    </Stack.Navigator>
  );
}
