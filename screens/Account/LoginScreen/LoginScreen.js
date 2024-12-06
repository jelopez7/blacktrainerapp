import { Button, Icon, Image, Input, Text } from "@rneui/base";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { styles } from "./LoginScreen.styles";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./LoginScreenData";
import { loginUser } from "../../../actions/auth";
import { useDispatch } from "react-redux";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const onShowHidePassword = () => setShowPassword((prevSate) => !prevSate);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        dispatch(loginUser(formValue));
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <ScrollView>
      <View style={styles.content}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.image}
        />

        <View style={styles.loginForm}>
          <Input
            placeholder="Correo electronico"
            containerStyle={styles.input}
            rightIcon={
              <Icon
                type="material-community"
                name="at"
                iconStyle={styles.icon}
              />
            }
            onChangeText={(text) => formik.setFieldValue("identifier", text)}
            errorMessage={formik.errors.identifier}
          />

          <Input
            placeholder="Contraseña"
            containerStyle={styles.input}
            secureTextEntry={showPassword ? false : true}
            rightIcon={
              <Icon
                type="material-community"
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                iconStyle={styles.icon}
                onPress={onShowHidePassword}
              />
            }
            onChangeText={(text) => formik.setFieldValue("password", text)}
            errorMessage={formik.errors.password}
          />

          <Button
            title="Iniciar sesión"
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn}
            onPress={formik.handleSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
}
