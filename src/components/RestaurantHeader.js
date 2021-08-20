import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { COLORS, icons, SIZES, FONTS } from "../constants";

export function RestaurantHeader({ navigation, restaurant }) {
  return (
    <View style={{ flexDirection: "row", height: 50, marginTop: 40 }}>
      <TouchableOpacity
        style={{
          width: 50,
          paddingLeft: SIZES.padding * 2,
          justifyContent: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={icons.back}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: SIZES.padding * 3,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray3,
          }}
        >
          <Text
            style={{
              ...FONTS.h3,
            }}
          >
            {restaurant?.name}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: 50,
          paddingRight: SIZES.padding * 2,
          justifyContent: "center",
        }}
      >
        <Image
          source={icons.list}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
