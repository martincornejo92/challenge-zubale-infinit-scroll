import { View, StyleSheet } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { TaskCard } from "../components/TaskCard";
import { FiltersDropdown } from "../components/FiltersDropdown";
import { useFilteredTasks } from "../hooks/useFilteredTasks";
import { TASKS } from "../data/generateTasks";

export function MarketplaceScreen() {
  const filteredTasks = useFilteredTasks(TASKS);

  return (
    <View style={styles.container}>
      <View style={styles.stickyHeader}>
        <FiltersDropdown />
      </View>

      <FlashList
        data={filteredTasks}
        renderItem={({ item }) => <TaskCard item={item} />}
        estimatedItemSize={200}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 6, paddingTop: 6 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  stickyHeader: {
    backgroundColor: "white",
    zIndex: 10,
    padding: 6,
  },
});
