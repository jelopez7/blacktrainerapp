import { Text } from "@rneui/base";
import React, { Fragment } from "react";
import { View } from "react-native";
import { styles } from "./HeaderUser.styles";
import { useSelector } from "react-redux";
import { map, size } from "lodash";
import moment from "moment";

export function HeaderUser() {
  const { user } = useSelector((state) => state.auth);

  return (
    <View style={styles.content}>
      {map(getOptionsHeader(user), (item, index) => (
        <Fragment key={index}>
          <View style={styles.info} key={index}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          {index < size(getOptionsHeader(user)) - 1 && (
            <View style={styles.separator} />
          )}
        </Fragment>
      ))}
    </View>
  );
}

function getOptionsHeader(user) {
  const calculateAge = (birthDate) => {
    return moment().diff(moment(birthDate, "YYYY-MM-DD"), "years");
  };

  const age = calculateAge(user.birthdate);
  return [
    {
      title: (user.height ? user.height : "0") + " CM",
      description: "Altura",
    },
    {
      title: (user.weight ? user.weight : "0") + " KG",
      description: "Peso",
    },
    {
      title: age ? age : "0",
      description: "Edad",
    },
  ];
}
