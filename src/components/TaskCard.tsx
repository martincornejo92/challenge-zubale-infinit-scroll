import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Task } from "../data/types";
import { SharedElement } from "react-navigation-shared-element";
import { useNavigation } from "@react-navigation/native";

type Props = {
  item: Task;
};

function TaskCardComponent({ item }: Props) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("TaskDetail", { item });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress} activeOpacity={0.8}>
      <SharedElement id={`item.${item.id}.photo`}>
        <Image
          source={{ uri: item.image_url }}
          style={styles.image}
          contentFit="cover"
          cachePolicy="memory-disk"
        />
      </SharedElement>

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>

        <View style={styles.metaRow}>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.status}>{item.status}</Text>
        </View>

        <Text style={styles.address} numberOfLines={1}>
          📍 {item.location.address}
        </Text>

        <Text style={styles.expires}>
          ⏰ {new Date(item.expires_at).toLocaleDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export const TaskCard = React.memo(TaskCardComponent);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#fff",
    margin: 6,
    borderRadius: 12,
    elevation: 2,
    flex: 1,
  },
  image: {
    width: 88,
    height: 88,
    borderRadius: 10,
    marginRight: 12,
    backgroundColor: "#eee",
  },
  info: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "600",
    fontSize: 14,
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
  },
  status: {
    fontSize: 12,
    color: "#666",
    textTransform: "capitalize",
  },
  address: {
    fontSize: 12,
    color: "#444",
  },
  expires: {
    fontSize: 11,
    color: "#888",
  },
});



