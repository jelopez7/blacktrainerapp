import { Avatar, Text } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./InfoUser.styles";
import * as ImagePicker from "expo-image-picker";

export function InfoUser() {
  const { user } = useSelector((state) => state.auth);

  const avatarUrl = user.avatar?.url ? user.avatar.url : user.avatar;

  const changeAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.canceled) uploadImage(result.assets[0].uri);
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);

    console.log(response);
  };

  return (
    <View style={styles.content}>
      <Avatar
        size="large"
        rounded
        containerStyle={styles.avatar}
        source={avatarUrl ? { uri: avatarUrl } : null}
        icon={avatarUrl ? null : { type: "material", name: "person" }}
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
