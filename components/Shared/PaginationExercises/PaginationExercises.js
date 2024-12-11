import { Icon, Text } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import { styles } from "./PaginationExercises.tyles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";

export function PaginationExercises({ page, data }) {
  const navigation = useNavigation();

  const previousItem = data[page - 1]?.attributes || null;
  const nextItem = data[page + 1]?.attributes || null;

  const goToRoutine = (exercise, index, routine) => {
    navigation.navigate(screen.excercise.tab, {
      screen: screen.excercise.Excercise,
      params: {
        exercise,
        index,
        routine,
      },
    });
  };

  return (
    <View style={styles.content}>
      {previousItem && (
        <Icon
          reverse
          type="material-community"
          name="arrow-left-thin"
          color="#60d4ed"
          size={30}
          containerStyle={styles.btnContainerLeft}
          onPress={() => goToRoutine(previousItem, page - 1, data)}
        />
      )}
      {nextItem && (
        <Icon
          reverse
          type="material-community"
          name="arrow-right-thin"
          color="#60d4ed"
          size={30}
          containerStyle={styles.btnContainerright}
          onPress={() => goToRoutine(nextItem, page + 1, data)}
        />
      )}
    </View>
  );
}
