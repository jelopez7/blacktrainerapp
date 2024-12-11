import { Avatar, Text } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./InfoUser.styles";

export function InfoUser() {
  const { user } = useSelector((state) => state.auth);

  const changeAvatar = async () => {
    console.log("Prueba");
  };

  return (
    <View style={styles.content}>
      <Avatar
        size="large"
        rounded
        containerStyle={styles.avatar}
        source={user?.avatar?.url ? { uri: user.avatar.url } : null}
        icon={user?.avatar?.url ? null : { type: "material", name: "person" }}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>
      <View>
        <Text style={styles.displayName}>{user.username || "Anónimo"}</Text>
        <Text>{user.email}</Text>
      </View>
    </View>
  );
}
