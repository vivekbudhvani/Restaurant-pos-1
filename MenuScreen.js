import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MenuItem from "../components/MenuItem";

const menuData = [
  { id: "1", name: "Veg Burger", price: 120 },
  { id: "2", name: "Pasta", price: 150 },
  { id: "3", name: "Pizza", price: 300 },
  { id: "4", name: "French Fries", price: 90 },
];

export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={menuData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MenuItem
            item={item}
            onAdd={() => navigation.navigate("Orders", { newItem: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});
