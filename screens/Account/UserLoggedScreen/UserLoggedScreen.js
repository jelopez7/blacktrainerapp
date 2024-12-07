import { Button, Text } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../actions/auth";
import { styles } from "./UserLoggedScreen.styles";

export function UserLoggedScreen() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser());
  };
  return (
    <View>
      <Button
        title="Cerrar sesión"
        buttonStyle={styles.btnStyles}
        titleStyle={styles.btnTextStyle}
        onPress={logout}
      />
    </View>
  );
}
