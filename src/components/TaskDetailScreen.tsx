import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Platform } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { Image } from "expo-image";
import { Task } from "../data/types";

export default function TaskDetailScreen({ route }) {
  const { item }: { item: Task } = route.params;

  const openInMaps = () => {
  const { lat, lng, address } = item.location;
  const url = Platform.select({
    ios: `http://maps.apple.com/?ll=${lat},${lng}&q=${encodeURIComponent(address)}`,
    android: `geo:${lat},${lng}?q=${lat},${lng}(${encodeURIComponent(address)})`,
    default: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
  });

  Linking.openURL(url!);
};


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
            <Text style={styles.chipText}>{item.status}</Text>
          </View>
          <View style={styles.chip}>
            <Text style={styles.chipText}>
              {item.location.address}
            </Text>
          </View>
        </View>

        <View style={styles.metaRow}>
  <Text style={styles.metaLabel}>Ubicación</Text>

        <TouchableOpacity onPress={openInMaps}>
            <Text style={[styles.metaValue, styles.link]}>
            {item.location.address}
            </Text>
        </TouchableOpacity>
        </View>

        <View style={styles.metaRow}>
          <Text style={styles.metaLabel}>Expira</Text>
          <Text style={styles.metaValue}>
            {new Date(item.expires_at).toLocaleString()}
          </Text>
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
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
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

  metaRow: {
    marginTop: 8,
  },

  metaLabel: {
    fontSize: 12,
    color: "#777",
  },

  metaValue: {
    fontSize: 14,
    fontWeight: "600",
  },
  link: {
  color: "#1a73e8",
  textDecorationLine: "underline",
},
coords: {
  fontSize: 12,
},
});
