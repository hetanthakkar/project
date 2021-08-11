import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MapView, { Marker, UrlTile, Callout } from "react-native-maps";

export default function App() {
  const [showMarkers, setShowMarkers] = useState(false);

  const markerIcon = require("./assets/m.png");

  const center = {
    latitude: 41.706765741,
    longitude: 44.45691383,
    latitudeDelta: 0.4,
    longitudeDelta: 0.4,
  };

  const items = [
    {
      lat: 41.706765741,
      lon: 44.45691383,
      name: "Nancy",
    },
    {
      lat: 41.76084868,
      lon: 44.508118998,
      name: "Didgori",
    },
    {
      lat: 41.812406223,
      lon: 44.678868322,
      name: "Lake Chili",
    },
  ];

  return (
    <View style={styles.container}>
      {showMarkers ? (
        <TouchableOpacity
          onPress={() => setShowMarkers(false)}
          style={styles.btn}
        >
          <Text style={styles.text}>Hide Markers</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => setShowMarkers(true)}
          style={styles.btn}
        >
          <Text style={styles.text}>Show Markers</Text>
        </TouchableOpacity>
      )}

      <MapView
        style={{ flex: 1, width: "100%" }}
        maxZoomLevel={19}
        region={center}
      >
        {showMarkers
          ? items.map((item, i) => (
              <Marker
                anchor={{ x: 0.37, y: 1 }}
                image={markerIcon}
                coordinate={{ latitude: item.lat, longitude: item.lon }}
                key={i}
              >
                <Callout tooltip={true}>
                  <View
                    style={{
                      backgroundColor: "#000",
                      paddingHorizontal: 16,
                      paddingVertical: 12,
                      borderRadius: 8,
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                </Callout>
              </Marker>
            ))
          : null}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  btn: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 32,
    right: 32,
    paddingVertical: 8,
    paddingHorizontal: 24,
    elevation: 3,
    zIndex: 3,
    borderRadius: 16,
  },
  text: {
    fontSize: 14,
    color: "#000",
  },
});
