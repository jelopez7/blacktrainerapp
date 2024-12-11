import { Text } from "@rneui/base";
import React from "react";
import { Dimensions, ScrollView, View } from "react-native";
import { styles } from "./ExerciseScreen.styles";
import { Header, PaginationExercises } from "../../../components/Shared";
import { Image } from "expo-image";

export function ExerciseScreen({ route }) {
  const image =
    route.params.exercise.exercise.data.attributes.image.data[0].attributes.url;

  const index = route.params.index;
  const routine = route.params.routine;

  const { width } = Dimensions.get("window");

  return (
    <View style={styles.content}>
      <Image
        source={image}
        style={{ height: 250, width: width }}
        contentFit="contain"
      />
      <ScrollView style={styles.contentScroll}>
        <Header exercise={route.params.exercise} />
      </ScrollView>
      <PaginationExercises page={index} data={routine} />
    </View>
  );
}
