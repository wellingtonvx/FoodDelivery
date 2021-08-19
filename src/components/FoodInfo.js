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

export function FoodInfo({ restaurant, scrollX }) {
  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle={16}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
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
          {/**Name & description */}
          <View
            style={{
              width: SIZES.width,
              alignItems: "center",
              marginTop: 15,
              paddingHorizontal: SIZES.padding * 2,
            }}
          >
            <Text
              style={{ ...FONTS.h2, marginVertical: 10, textAlign: "center" }}
            >
              {item.name} - {item.price.toFixed(2)}
            </Text>
            <Text style={{ ...FONTS.body3 }}>{item.description} </Text>
          </View>
          {/**Colories */}
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Image
              source={icons.fire}
              style={{
                width: 20,
                height: 20,
                marginRight: 10,
              }}
            />
            <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>
              {item.calories.toFixed(2)} cal
            </Text>
          </View>
        </View>
      ))}
    </Animated.ScrollView>
  );
}
