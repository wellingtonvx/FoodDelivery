import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import { COLORS } from "../constants";
import { Header } from "../components/Header";
import { MainCategories } from "../components/MainCategories";
import { RestaurantList } from "../components/RestaurantList";

import { categoryData } from "../utils/categoryData";
import { restaurantData } from "../utils/RestaurantData";

const initialCurrentLocation = {
  streetName: "Kuching",
  gps: {
    latitude: 1.5496614931250685,
    longitude: 110.36381866919922,
  },
};

export function Home({ navigation }) {
  const [categories, setCategories] = useState(categoryData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [restaurants, setRestaurants] = useState(restaurantData);
  const [currentLocation, setCurrentLocation] = useState(
    initialCurrentLocation
  );

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
        currentLocation={currentLocation}
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
