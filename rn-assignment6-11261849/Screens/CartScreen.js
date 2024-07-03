import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductItem from './components/ProductItems';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('cart');
        if (jsonValue != null) {
          setCartItems(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.error(e);
      }
    };

    loadCartItems();
  }, []);

  const removeFromCart = async (productId) => {
    const newCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(newCartItems);
    await AsyncStorage.setItem('cart', JSON.stringify(newCartItems));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <ProductItem product={item} onRemoveFromCart={removeFromCart} isCart />
        )}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.total}>Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
});

export default CartScreen;
