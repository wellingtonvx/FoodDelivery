import React from "react";
import {} from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, Animated } from "react-native";

import { COLORS, icons, SIZES, FONTS } from "../constants";

export function Order({
  scrollX,
  restaurant,
  getBasketItemCount,
  sumOrder,
  navigation,
  currentLocation,
}) {
  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={{ height: 30 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: SIZES.padding,
          }}
        >
          {restaurant?.menu.map((item, index) => {
            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });

            const dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
              extrapolate: "clamp",
            });

            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                key={`dot-${index}`}
                opacity={opacity}
                style={{
                  borderRadius: SIZES.radius,
                  marginHorizontal: 6,
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: dotColor,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }

  return (
    <View>
      {renderDots()}

      <View
        style={{
          backgroundColor: COLORS.white,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: SIZES.padding * 2,
            paddingHorizontal: SIZES.padding * 3,
            borderBottomColor: COLORS.lightGray2,
            borderBottomWidth: 1,
          }}
        >
          <Text style={{ ...FONTS.h3 }}>
            {getBasketItemCount()} Items no Carrinho
          </Text>
          <Text style={{ ...FONTS.h3 }}>${sumOrder()}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: SIZES.padding * 2,
            paddingHorizontal: SIZES.padding * 3,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={icons.pin}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.darkgray,
              }}
            />
            <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>
              Location
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Image
              source={icons.master_card}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.darkgray,
              }}
            />
            <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>
              {" "}
              8888
            </Text>
          </View>
        </View>

        <View
          style={{
            padding: SIZES.padding * 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: SIZES.width * 0.9,
              padding: SIZES.padding,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              borderRadius: SIZES.radius,
            }}
            onPress={() =>
              navigation.navigate("OrderDelivery", {
                restaurant,
                currentLocation,
              })
            }
          >
            <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Pedido</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
