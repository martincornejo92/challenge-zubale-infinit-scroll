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
    <TouchableOpacity style={styles.container} onPress={handlePress}>
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
    borderRadius: 8,
    elevation: 2,
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "600",
  },
});


