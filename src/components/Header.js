import React from "react";

import { View, Text, TouchableOpacity, Image } from "react-native";

import { COLORS, icons, SIZES, FONTS } from "../constants";

export function Header({ currentLocation }) {
  return (
    <View style={{ flexDirection: "row", height: 50, marginTop: 40 }}>
      <TouchableOpacity
        style={{
          width: 50,
          paddingLeft: SIZES.padding * 2,
          justifyContent: "center",
        }}
      >
        <Image
          source={icons.nearby}
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
            width: "70%",
            height: "100%",
            backgroundColor: COLORS.lightGray3,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: SIZES.radius,
          }}
        >
          <Text
            style={{
              ...FONTS.h3,
            }}
          >
            {currentLocation.streetName}
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
          source={icons.basket}
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
