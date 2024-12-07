import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store/store";
import HandlerNavigation from "./navigation/HandlerNavigation";
import { NativeBaseProvider } from "native-base";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NativeBaseProvider>
          <NavigationContainer>
            <HandlerNavigation />
          </NavigationContainer>

          <Toast />
        </NativeBaseProvider>
      </Provider>
    </>
  );
}
