import { Button, Icon, Image, Input, Text } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { styles } from "./LoginScreen.styles";
import { useSelector } from "react-redux";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const onShowHidePassword = () => setShowPassword((prevSate) => !prevSate);

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(auth);
  }, []);

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
          />

          <Button
            title="Iniciar sesión"
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn}
          />
        </View>
      </View>
    </ScrollView>
  );
}
