import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

export default function BillScreen({ route, navigation }) {
  const { orders } = route.params || { orders: [] };
  const total = (orders || []).reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bill</Text>
      <FlatList
        data={orders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.name} - ₹{item.price}
          </Text>
        )}
      />
      <Text style={styles.total}>Total: ₹{total}</Text>
      <Button title="Back to Menu" onPress={() => navigation.navigate("Menu")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  item: { fontSize: 18 },
  total: { fontSize: 20, fontWeight: "bold", marginTop: 10 },
});
