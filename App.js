import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store/store";
import HandlerNavigation from "./navigation/HandlerNavigation";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NativeBaseProvider>
          <NavigationContainer>
            <HandlerNavigation />
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    </>
  );
}
