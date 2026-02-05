import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useFiltersStore } from "../store/useFiltersStore";

export function FiltersDropdown() {
  const [visible, setVisible] = useState(false);

  const { category, setCategory, sortBy, setSortBy } = useFiltersStore();

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>Filtros ▾</Text>
      </TouchableOpacity>

      <Modal transparent animationType="slide" visible={visible}>
        <View style={styles.overlay}>
          <View style={styles.sheet}>
            <Text style={styles.title}>Filtros</Text>

            <Text style={styles.label}>Categoría</Text>
            <View style={styles.row}>
              {["all", "design", "dev", "marketing"].map((c) => (
                <TouchableOpacity
                  key={c}
                  style={[
                    styles.option,
                    category === c && styles.optionActive,
                  ]}
                  onPress={() => setCategory(c)}
                >
                  <Text>{c}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.label}>Orden</Text>
            <View style={styles.row}>
              {["newest", "price"].map((s) => (
                <TouchableOpacity
                  key={s}
                  style={[
                    styles.option,
                    sortBy === s && styles.optionActive,
                  ]}
                  onPress={() => setSortBy(s)}
                >
                  <Text>{s}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => setVisible(false)}
            >
              <Text style={styles.applyText}>Aplicar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    backgroundColor: "#111",
    borderRadius: 8,
    alignSelf: "flex-start",
    margin: 12,
  },
  buttonText: { color: "#fff", fontWeight: "600" },

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  sheet: {
    backgroundColor: "#fff",
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 12 },
  label: { fontWeight: "600", marginTop: 12 },

  row: { flexDirection: "row", flexWrap: "wrap", gap: 8 },

  option: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  optionActive: {
    backgroundColor: "#ddd",
  },

  applyButton: {
    marginTop: 20,
    backgroundColor: "#111",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  applyText: { color: "#fff", fontWeight: "600" },
});

