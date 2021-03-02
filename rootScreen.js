import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import home from "./screen/home";
import login from "./screen/login";

const Stack = createStackNavigator();

const RootScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{ headerStyle: { backgroundColor: "papayawhip" } }}
    >
      <Stack.Screen
        name="home"
        component={home}
        options={({navigation}) => ({
            title: 'Flipkart',
            headerTitleStyle: {
                textAlign: 'center'
            }
            
        }) }
      />
      <Stack.Screen name="login" component={login} />
    </Stack.Navigator>
  );
};

export default RootScreen;
