import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import OrderItem from "../components/OrderItem";

export default function OrderScreen({ route, navigation }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (route.params?.newItem) {
      setOrders((prev) => [...prev, route.params.newItem]);
    }
  }, [route.params]);

  const removeItem = (id) => {
    setOrders((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <OrderItem item={item} onRemove={() => removeItem(item.id)} />
        )}
      />
      {orders.length > 0 && (
        <Button title="Generate Bill" onPress={() => navigation.navigate("Bill", { orders })} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});
