import { Icon, Image, Rating, Text } from "@rneui/base";
import React from "react";
import {
  Linking,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../utils";

export default function AccountScreen() {
  const navitation = useNavigation();

  const goToLogin = () => {
    navitation.navigate(screen.account.login);
  };

  const openWhatsApp = (phoneNumber, message = "") => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log("WhatsApp no está instalado en este dispositivo");
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error("Error al abrir WhatsApp:", err));
  };

  const handleOpenWhatsApp = () => {
    const phoneNumber = "+573152335896"; // Número en formato internacional
    const message = "Hola, ¿cómo estás?"; // Mensaje opcional
    openWhatsApp(phoneNumber, message);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.img} />

      <View>
        <Text style={styles.title}>Te damos la bienvenida a BlackAngel</Text>

        <Text style={styles.description}>
          Si tienes una cuenta con nosotros, puedes Aceptar y continuar. En caso
          de que requiera nuestros servicios de rutinas personalizadas, puedes
          contactarte con nosotros al número{" "}
          <TouchableOpacity onPress={handleOpenWhatsApp}>
            <Text style={styles.wpp}>
              3152335896{" "}
              <Icon
                type="material-community"
                size={15}
                name="whatsapp"
                color="#00d757"
              />
            </Text>
          </TouchableOpacity>
          , para brindarte toda la información y poder entregarte una rutina que
          se adapte a tus expectativas
        </Text>

        <Text style={styles.btn} onPress={goToLogin}>
          Aceptar y continuar
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: 0,
  },
  img: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
    marginVertical: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    opacity: 0.6,
    textAlign: "center",
    marginBottom: 20,
  },
  btn: {
    color: "#e28316",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 30,
  },
  wpp: {
    color: "#00d757",
    fontWeight: "bold",
  },
});
