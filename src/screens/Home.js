import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { COLORS, images, icons, SIZES, FONTS } from "../constants";
import { Header } from "../components/Header";
import { MainCategories } from "../components/MainCategories";
import { RestaurantList } from "../components/RestaurantList";

import { categoryData } from "../utils/categoryData";
import { restaurantData } from "../utils/RestaurantData";

const initialCurrentLocation = {
  streetName: "Itaitinga",
  gps: {
    latitude: -3.8906073,
    longitude: -38.5206712,
  },
};

export function Home({ navigation }) {
  const [categories, setCategories] = useState(categoryData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [restaurants, setRestaurants] = useState(restaurantData);
  const [currentLocation, setCurrentLocation] = useState(
    initialCurrentLocation
  );

  const affordable = 1;
  const fairPrice = 2;
  const expensive = 3;

  return (
    <SafeAreaView style={styles.container}>
      <Header currentLocation={currentLocation} />

      <MainCategories
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        restaurants={restaurants}
        setRestaurants={setRestaurants}
        selectedCategory={selectedCategory}
      />

      <RestaurantList
        restaurants={restaurants}
        categories={categories}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      hieght: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
