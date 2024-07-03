import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import removeIcon from '../assets/remove.png'; // Adjust the path if necessary

const products = [
  { id: '1', imgSrc: require('../assets/dress4.png'), name: 'Office Wear', price: 120 },
  { id: '2', imgSrc: require('../assets/dress5.png'), name: 'Lameri', price: 120 },
  { id: '3', imgSrc: require('../assets/dress3.png'), name: 'Church Wear', price: 120 },
];

const CheckoutPage = () => {
  const renderItem = ({ item }) => (
    <View style={styles.product}>
      <Image source={item.imgSrc} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
      <Image source={removeIcon} style={styles.removeIcon} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/Logo.png')} style={styles.logoIcon} />
        <Text style={styles.headerText}>CHECKOUT</Text>
        <Image source={require('../assets/Search (2).png')} style={styles.searchIcon} />
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>EST. TOTAL</Text>
        <Text style={styles.totalPrice}>$360</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logoIcon: {
    width: 24,
    height: 24,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  productList: {
    padding: 16,
  },
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  productImage: {
    width: 60,
    height: 90,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  removeIcon: {
    width: 24,
    height: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    fontSize: 16,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutPage;
