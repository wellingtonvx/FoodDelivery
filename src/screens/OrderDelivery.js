import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import {
  COLORS,
  images,
  icons,
  SIZES,
  FONTS,
  GOOGLE_API_KEY,
} from "../constants";

export function OrderDelivery({ route, navigation }) {
  const [restaurant, setRestaurants] = useState(null);
  const [streetName, setStreetName] = useState("");
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);
  const [region, setRegion] = useState(null);

  useEffect(() => {
    let { restaurant, currentLocation } = route.params;

    let fromLoc = currentLocation.gps;
    let toLoc = restaurant.location;
    let street = currentLocation.streetName;

    let mapRegion = {
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
    };

    setRestaurants(restaurant);
    setStreetName(street);
    setFromLocation(fromLoc);
    setToLocation(toLoc);
    setRegion(mapRegion);
  }, []);

  function RenderMap() {
    function DestinationMarker() {
      return (
        <Marker coordinate={toLocation}>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.white,
            }}
          >
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.primary,
              }}
            >
              <Image
                source={icons.pin}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: COLORS.white,
                }}
              />
            </View>
          </View>
        </Marker>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
        >
          <DestinationMarker />
        </MapView>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <RenderMap />
    </View>
  );
}
