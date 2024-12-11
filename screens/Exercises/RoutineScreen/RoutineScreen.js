import { Text, Icon } from "@rneui/base";
import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { styles } from "./RoutineScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { Image } from "expo-image";

export function RoutineScreen({ route }) {
  const navigation = useNavigation();

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
      <FlatList
        data={route.params.routine}
        renderItem={({ item, index }) => {
          const exercise = item.attributes;

          return (
            <TouchableOpacity
              onPress={() => goToRoutine(exercise, index, route.params.routine)}
            >
              <View style={styles.contentFlat}>
                <View style={styles.contentInfo}>
                  <Image
                    source={
                      exercise.exercise.data.attributes.image.data[0].attributes
                        .url
                    }
                    style={styles.image}
                  />
                  <View>
                    <Text style={styles.name}>
                      {exercise.exercise.data.attributes.name}
                    </Text>
                  </View>
                </View>
                <Icon type="material-community" name="chevron-right" />
              </View>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
}
