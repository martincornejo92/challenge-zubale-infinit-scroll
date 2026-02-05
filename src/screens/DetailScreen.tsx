import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text>Detail Screen (bonus / placeholder)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
