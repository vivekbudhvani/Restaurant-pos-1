import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function OrderItem({ item, onRemove }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.name} - ₹{item.price}</Text>
      <Button title="Remove" onPress={onRemove} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  text: { fontSize: 16 },
});
