import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootScreen from "./rootScreen";
import store from "./store/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootScreen />
      </NavigationContainer>
    </Provider>
  );
}
