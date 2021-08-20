import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { COLORS, icons, SIZES, FONTS } from "../constants";

export function RestaurantList({
  navigation,
  categories,
  restaurants,
  currentLocation,
}) {
  const getCategoryNameById = (id) => {
    let category = categories.filter((c) => c.id == id);

    if (category.length > 0) {
      return category[0].name;
    }

    return "";
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        marginBottom: SIZES.padding * 2,
      }}
      onPress={() =>
        navigation.navigate("Restaurant", {
          item,
          currentLocation: currentLocation,
        })
      }
    >
      {/**Image*/}
      <View
        style={{
          marginBottom: SIZES.padding,
        }}
      >
        <Image
          source={item.photo}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 200,
            borderRadius: SIZES.radius,
          }}
        />

        <View
          style={{
            position: "absolute",
            bottom: 0,
            height: 50,
            width: SIZES.width * 0.3,
            backgroundColor: COLORS.white,
            borderTopRightRadius: SIZES.radius,
            borderBottomLeftRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            ...styles.shadow,
          }}
        >
          <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
        </View>
      </View>

      {/**Restaurant info*/}

      <Text style={{ ...FONTS.body2 }}>{item.name}</Text>
      <View style={{ marginTop: SIZES.padding, flexDirection: "row" }}>
        <Image
          source={icons.star}
          style={{
            height: 20,
            width: 20,
            tintColor: COLORS.primary,
            marginRight: 10,
          }}
        />
        <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
          }}
        >
          {item.categories.map((categoryId) => {
            return (
              <View key={categoryId} style={{ flexDirection: "row" }}>
                <Text style={{ ...FONTS.body3 }}>
                  {getCategoryNameById(categoryId)}
                </Text>
                <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
              </View>
            );
          })}
          {[1, 2, 3].map((priceRating) => (
            <Text
              key={priceRating}
              style={{ ...FONTS.body3 }}
              color={
                priceRating <= item.priceRating ? COLORS.BLACK : COLORS.darkgray
              }
            >
              $
            </Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={restaurants}
      keyExtractor={(item) => `${item.id}`}
      renderItem={renderItem}
      contentContainerStyle={{
        paddingHorizontal: SIZES.padding * 2,
        paddingBottom: 30,
      }}
      showsVerticalScrollIndicator={false}
    />
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
