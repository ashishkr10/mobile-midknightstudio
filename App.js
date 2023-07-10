import "react-native-gesture-handler";

import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./screens/Home";
import Help from "./screens/Help";
import About from "./screens/About";
import Update from "./screens/Update";
import Feedback from "./screens/Feedback";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerPosition: "right",
          drawerStyle: {
            width: 250,
          },
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Help" component={Help} />
        <Drawer.Screen name="Update" component={Update} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Feedback" component={Feedback} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
