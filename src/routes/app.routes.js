import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { OrderDelivery } from "../screens/OrderDelivery";
import { Restaurant } from "../screens/Restaurant";
import { TabNavigator } from "../navigation/tabs";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Home"}
    >
      <Screen name="Home" component={TabNavigator} />
      <Screen name="OrderDelivery" component={OrderDelivery} />
      <Screen name="Restaurant" component={Restaurant} />
    </Navigator>
  );
}
