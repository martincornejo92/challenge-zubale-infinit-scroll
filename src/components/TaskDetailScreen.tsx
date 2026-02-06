import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { Image } from "expo-image";

export default function TaskDetailScreen({ route }) {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.imageWrapper}>
        <SharedElement id={`item.${item.id}.photo`}>
          <Image
            source={{ uri: item.image_url }}
            style={styles.image}
            contentFit="cover"
            cachePolicy="memory-disk"
          />
        </SharedElement>

        <View style={styles.priceBadge}>
          <Text style={styles.priceText}>${item.price}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>

        <View style={styles.chipsRow}>
          <View style={styles.chip}>
            <Text style={styles.chipText}>{item.category}</Text>
          </View>
          <View style={styles.chip}>
            <Text style={styles.chipText}>{item.distance} km</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

TaskDetailScreen.sharedElements = (route) => {
  const { item } = route.params;
  return [`item.${item.id}.photo`];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  imageWrapper: {
    position: "relative",
  },

  image: {
    width: "100%",
    height: 380,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  priceBadge: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },

  priceText: {
    fontSize: 16,
    fontWeight: "700",
  },

  card: {
    backgroundColor: "#fff",
    marginTop: 20,
    marginHorizontal: 16,
    borderRadius: 24,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
  },

  chipsRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 12,
  },

  chip: {
    backgroundColor: "#eee",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },

  chipText: {
    fontSize: 12,
    fontWeight: "500",
  },

  description: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
});


