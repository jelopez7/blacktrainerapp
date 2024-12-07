import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { screen } from "../utils";
import { ExercisesScreen } from "../screens/Exercises";

const Stack = createNativeStackNavigator();

export default function ExercisesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.excercise.Excercises}
        component={ExercisesScreen}
        options={{ title: "Ejercicios" }}
      />
    </Stack.Navigator>
  );
}
