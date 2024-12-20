import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { screen } from "../utils";
import { UserLoggedScreen } from "../screens/Account/UserLoggedScreen";

const Stack = createNativeStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.account.account}
        component={UserLoggedScreen}
        options={{ title: "Cuenta" }}
      />
    </Stack.Navigator>
  );
}
