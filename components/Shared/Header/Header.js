import { Icon, Text } from "@rneui/base";
import React from "react";
import { styles } from "./Header.styles";
import { View } from "react-native";

export function Header(exercise) {
  return (
    <View style={styles.content}>
      <View style={styles.titleView}>
        <Text style={styles.name}>
          {exercise.exercise.exercise.data.attributes.name}
        </Text>
      </View>
      <View style={[styles.contentHeader, { width: "auto" }]}>
        <View style={styles.contentIcon}>
          <Icon
            color="#99e5f3"
            size={50}
            type="material-community"
            name="debug-step-over"
          />
          <Text style={styles.textInfo}>Repeticiones</Text>
          <Text style={styles.textInfoData}>{exercise.exercise.reps}</Text>
        </View>
        <View style={styles.contentIcon}>
          <Icon
            color="#99e5f3"
            size={50}
            type="material-community"
            name="bookmark-check"
          />
          <Text style={styles.textInfo}>Series</Text>
          <Text style={styles.textInfoData}>{exercise.exercise.series}</Text>
        </View>
        <View style={styles.contentIcon}>
          <Icon
            color="#99e5f3"
            size={50}
            type="material-community"
            name="format-list-bulleted-type"
          />
          <Text style={styles.textInfo}>Tipo</Text>
          <Text style={styles.textInfoData}>
            {exercise.exercise.type.data.attributes.name}
          </Text>
        </View>
      </View>

      <Text style={styles.description}>{exercise.exercise.description}</Text>
    </View>
  );
}
