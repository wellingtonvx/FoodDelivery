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
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const { item, currentLocation } = route.params;

    setRestaurant(item);
    setCurrentLocation(currentLocation);
  });

  function EditOrder(action, menuId, price) {
    let orderList = orderItems.slice();
    let item = orderList.filter((order) => order.menuId == menuId);
    if (action == "+") {
      if (item.length > 0) {
        let newQty = item[0].qty + 1;
        item[0].qty = newQty;
        item[0].total = item[0].qty * price;
      } else {
        const newItem = {
          menuId: menuId,
          qty: 1,
          price: price,
          total: price,
        };

        orderList.push(newItem);
      }

      setOrderItems(orderList);
    } else {
      if (item.length > 0) {
        if (item[0].qty > 0) {
          let newQty = item[0].qty - 1;
          item[0].qty = newQty;
          item[0].total = newQty * price;
        }
      }

      setOrderItems(orderList);
    }
  }

  function OrderQty(menuId) {
    let orderItem = orderItems.filter((order) => order.menuId == menuId);

    if (orderItem.length > 0) {
      return orderItem[0].qty;
    }

    return 0;
  }

  function getBasketItemCount() {
    let itemCount = orderItems.reduce(
      (total, current) => total + (current.qty || 0),
      0
    );

    return itemCount;
  }

  function sumOrder() {
    let total = orderItems.reduce(
      (total, current) => total + (current.total || 0),
      0
    );

    return total.toFixed(2);
  }

  return (
    <SafeAreaView style={styles.container}>
      <RestaurantHeader navigation={navigation} restaurant={restaurant} />
      <FoodInfo
        restaurant={restaurant}
        scrollX={scrollX}
        EditOrder={EditOrder}
        OrderQty={OrderQty}
      />
      <Order
        scrollX={scrollX}
        restaurant={restaurant}
        sumOrder={sumOrder}
        getBasketItemCount={getBasketItemCount}
        currentLocation={currentLocation}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
});
