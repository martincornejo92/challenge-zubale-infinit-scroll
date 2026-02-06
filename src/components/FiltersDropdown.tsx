import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useFiltersStore } from "../store/useFiltersStore";

export function FiltersDropdown() {
  const [visible, setVisible] = useState(false);

  const { sortBy, setSortBy, price, setPrice, distance, setDistance } =
    useFiltersStore();

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>Filtros ▾</Text>
      </TouchableOpacity>

      <Modal transparent animationType="slide" visible={visible}>
        <View style={styles.overlay}>
          <View style={styles.sheet}>
            <Text style={styles.title}>Filtros</Text>

            <Text style={styles.label}>Orden</Text>
            <View style={styles.row}>
              {["newest", "price"].map((s) => (
                <TouchableOpacity
                  key={s}
                  style={[styles.option, sortBy === s && styles.optionActive]}
                  onPress={() => setSortBy(s as any)}
                >
                  <Text>{s}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.label}>Precio</Text>
            <View style={styles.row}>
              {[
                { key: "all", label: "Todos" },
                { key: "lt50", label: "< $50" },
                { key: "50to100", label: "$50 - $100" },
                { key: "gt100", label: "> $100" },
              ].map((p) => (
                <TouchableOpacity
                  key={p.key}
                  style={[
                    styles.option,
                    price === p.key && styles.optionActive,
                  ]}
                  onPress={() => setPrice(p.key as any)}
                >
                  <Text>{p.label}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.label}>Distancia</Text>
            <View style={styles.row}>
              {[
                { key: "all", label: "Todas" },
                { key: "lt2", label: "< 2km" },
                { key: "lt5", label: "< 5km" },
                { key: "lt10", label: "< 10km" },
              ].map((d) => (
                <TouchableOpacity
                  key={d.key}
                  style={[
                    styles.option,
                    distance === d.key && styles.optionActive,
                  ]}
                  onPress={() => setDistance(d.key as any)}
                >
                  <Text>{d.label}</Text>
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


