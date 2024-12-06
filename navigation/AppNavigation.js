import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { screen } from "../utils";
import AccountStack from "./AccountStack";
import { Icon } from "@rneui/base";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
}

function screenOptions(route, color, size) {
  let iconName;

  if (route.name === screen.restaurant.tab) {
    iconName = "compass-outline";
  }

  if (route.name === screen.favorites.tab) {
    iconName = "heart-outline";
  }

  if (route.name === screen.ranking.tab) {
    iconName = "star-outline";
  }

  if (route.name === screen.search.tab) {
    iconName = "magnify";
  }

  if (route.name === screen.account.tab) {
    iconName = "home-outline";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}
