import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { Image } from "expo-image";

export default function TaskDetailScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <SharedElement id={`item.${item.id}.photo`}>
        <Image
          source={{ uri: item.image_url }}
          style={styles.image}
          contentFit="cover"
          cachePolicy="memory-disk"
        />
      </SharedElement>
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>${item.price}</Text>
        <Text>{item.category}</Text>
        <Text>{item.distance} km</Text>
      </View>
    </View>
  );
}

TaskDetailScreen.sharedElements = (route) => {
  const { item } = route.params;
  return [`item.${item.id}.photo`];
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  image: { width: "100%", height: 300 },
  info: { padding: 12 },
  title: { fontWeight: "600", fontSize: 20 },
});
