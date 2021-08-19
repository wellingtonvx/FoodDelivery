import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
} from "react-native";

import { COLORS, images, icons, SIZES, FONTS } from "../constants";

import { RestaurantHeader } from "../components/RestaurantHeader";
import { FoodInfo } from "../components/FoodInfo";

export function Restaurant({ route, navigation }) {
  const [restaurant, setRestaurant] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const { item, currentLocation } = route.params;

    setRestaurant(item);
    setCurrentLocation(currentLocation);
  });

  return (
    <SafeAreaView>
      <RestaurantHeader navigation={navigation} restaurant={restaurant} />
      <FoodInfo restaurant={restaurant} />
    </SafeAreaView>
  );
}
