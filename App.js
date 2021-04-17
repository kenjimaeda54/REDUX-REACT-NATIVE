import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as StoreProvider } from "react-redux";
import { createStore } from "redux";

import Home from "./src/Home"
import Login from "./src/Login"
import LoginUp from "./src/LoginUp/"
import Reducers from "./src/Reducers/reducers"


let store = createStore(Reducers);

function Navigation() {

  const Stack = createStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" >

        <Stack.Screen

          name="home"
          component={Home}
          options={{
            headerShown: false,

          }}

        />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="loginUp" component={LoginUp} />


      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (

    <StoreProvider store={store}  >

      <Navigation />

    </StoreProvider>

  )

}
