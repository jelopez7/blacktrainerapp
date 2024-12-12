import { Button, Input, Text } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import { styles } from "./ChangeInfoForm.styles";
import { useFormik } from "formik";

export function ChangeInfoForm({
  onClose,
  placeholder,
  btn,
  keyboardType = "number-pad",
}) {
  return (
    <View style={styles.content}>
      <Input
        placeholder={placeholder}
        keyboardType={keyboardType}
        rightIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#c2c2c2",
        }}
      />
      <Button
        title={btn}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  );
}
