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
      <FlashList
        data={filteredTasks}
        renderItem={({ item }) => <TaskCard item={item} />}
        estimatedItemSize={200}
        numColumns={2} // diseño tipo Pinterest
        keyExtractor={(item) => item.id}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => <FiltersDropdown />}
        contentContainerStyle={{ padding: 6 }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 12,
    alignItems: "flex-start",
  },
  listContainer: {
    flex: 1, // ✅ CLAVE: le da altura a la lista
  },
});



