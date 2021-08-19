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
import { Order } from "../components/Order";

export function Restaurant({ route, navigation }) {
  const scrollX = new Animated.Value(0);
  const [restaurant, setRestaurant] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const { item, currentLocation } = route.params;

    setRestaurant(item);
    setCurrentLocation(currentLocation);
  });

  return (
    <SafeAreaView style={styles.container}>
      <RestaurantHeader navigation={navigation} restaurant={restaurant} />
      <FoodInfo restaurant={restaurant} scrollX={scrollX} />
      <Order scrollX={scrollX} restaurant={restaurant} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
});
