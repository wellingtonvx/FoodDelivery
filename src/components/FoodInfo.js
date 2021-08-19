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

export function FoodInfo({ restaurant }) {
  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle={16}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
    >
      {restaurant?.menu.map((item, index) => (
        <View key={`menu-${index}`} style={{ alignItems: "center" }}>
          <View style={{ height: SIZES.height * 0.35 }}>
            <Image
              source={item.photo}
              resizeMode="cover"
              style={{
                width: SIZES.width,
                height: "100%",
              }}
            />

            <View
              style={{
                position: "absolute",
                bottom: -20,
                width: SIZES.width,
                height: 50,
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopLeftRadius: 25,
                  borderBottomLeftRadius: 25,
                }}
              >
                <Text style={{ ...FONTS.body1 }}> - </Text>
              </TouchableOpacity>

              <View
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ ...FONTS.h2 }}>5</Text>
              </View>

              <TouchableOpacity
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopRightRadius: 25,
                  borderBottomRightRadius: 25,
                }}
              >
                <Text style={{ ...FONTS.body1 }}> + </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </Animated.ScrollView>
  );
}
