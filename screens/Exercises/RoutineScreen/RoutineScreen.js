import { Image, Text, Icon } from "@rneui/base";
import React from "react";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import { styles } from "./RoutineScreen.styles";

export function RoutineScreen({ route }) {
  return (
    <View style={styles.content}>
      <FlatList
        data={route.params.routine}
        renderItem={(doc) => {
          const routine = doc.item.attributes;

          return (
            <TouchableOpacity>
              <View style={styles.contentFlat}>
                <View style={styles.contentInfo}>
                  <Image
                    source={{
                      uri: routine.exercise.data.attributes.image.data[0]
                        .attributes.url,
                    }}
                    style={styles.image}
                  />
                  <View>
                    <Text style={styles.name}>
                      {routine.exercise.data.attributes.name}
                    </Text>
                    <Text style={styles.info}>{routine.description}</Text>
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
