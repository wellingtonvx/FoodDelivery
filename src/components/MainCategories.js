import React from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { COLORS, SIZES, FONTS } from "../constants";
import { restaurantData } from "../utils/RestaurantData";

export function MainCategories({
  categories,
  setSelectedCategory,
  restaurants,
  setRestaurants,
  selectedCategory,
}) {
  function onSelectCategory(category) {
    //filter Restaurant
    let restaurantList = restaurantData.filter((restaurant) =>
      restaurant.categories.includes(category.id)
    );
    setRestaurants(restaurantList);
    setSelectedCategory(category);
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={{
          padding: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
          backgroundColor:
            selectedCategory?.id === item.id ? COLORS.primary : COLORS.white,
          borderRadius: SIZES.radius,
          alignItems: "center",
          justifyContent: "center",
          marginRight: SIZES.padding,
          ...styles.shadow,
        }}
        onPress={() => onSelectCategory(item)}
      >
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:
              selectedCategory?.id === item.id
                ? COLORS.white
                : COLORS.lightGray,
          }}
        >
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </View>
        <Text
          style={{
            marginTop: SIZES.padding,
            color:
              selectedCategory?.id === item.id ? COLORS.white : COLORS.black,
            ...FONTS.body5,
          }}
        >
          {" "}
          {item.name}{" "}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ padding: SIZES.padding * 2 }}>
      <Text style={{ ...FONTS.h2 }}>Principais</Text>
      <Text style={{ ...FONTS.h1 }}>Categorias</Text>

      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
