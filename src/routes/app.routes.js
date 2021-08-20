import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { OrderDelivery } from "../screens/OrderDelivery";
import { Restaurant } from "../screens/Restaurant";
import { TabNavigator } from "../navigation/tabs";

const { Navigator, Screen } = createNativeStackNavigator();

const initialCurrentLocation = {
  streetName: "Itaitinga",
  gps: {
    latitude: -3.8906073,
    longitude: -38.5206712,
  },
};

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Home"}
      initialCurrentLocation={initialCurrentLocation}
    >
      <Screen name="Home" component={TabNavigator} />
      <Screen name="OrderDelivery" component={OrderDelivery} />
      <Screen name="Restaurant" component={Restaurant} />
    </Navigator>
  );
}
