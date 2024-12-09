import { Icon, ListItem, Text } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { getRoutinesByUser } from "../../../api/routines";
import { useSelector } from "react-redux";
import { groupBy, map } from "lodash";
import { View } from "react-native";
import { styles } from "./ExercisesScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";

export function ExercisesScreen() {
  const [routines, setRoutines] = useState(null);

  const { user } = useSelector((state) => state.auth);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const response = await getRoutinesByUser(user.id);
      setRoutines(groupBy(response, (item) => item.attributes.date));
    })();
  }, []);

  const goToRoutine = (routine) => {
    navigation.navigate(screen.excercise.tab, {
      screen: screen.excercise.Routine,
      params: {
        routine,
      },
    });
  };

  let counter = 1;

  return (
    <View style={styles.content}>
      {map(routines, (routine, index) => (
        <ListItem
          containerStyle={styles.listContent}
          key={index}
          bottomDivider
          onPress={() => goToRoutine(routine)}
        >
          <ListItem.Content>
            <Text style={styles.text}>DÍA {counter++}</Text>
          </ListItem.Content>

          <Icon type="material-community" name="chevron-right" />
        </ListItem>
      ))}
    </View>
  );
}
