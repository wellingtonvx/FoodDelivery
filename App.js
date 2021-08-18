import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      "Roboto-Black": {
        uri: require("./src/assets/fonts/Roboto-Black.ttf"),
      },
      "Roboto-Bold": {
        uri: require("./src/assets/fonts/Roboto-Bold.ttf"),
      },
      "Roboto-Regular": {
        uri: require("./src/assets/fonts/Roboto-Regular.ttf"),
      },
    });

    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  return fontsLoaded ? (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  ) : null;
}
