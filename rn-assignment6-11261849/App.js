







import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CheckoutPage from './Screens/CheckoutPage'; // Import the CheckoutPage component

// Import local images
import dress4 from './assets/dress4.png';
import dress5 from './assets/dress5.png';
import dress3 from './assets/dress3.png';
import listviewIcon from './assets/Listview.png';
import filterIcon from './assets/Filter.png';
import menuIcon from './assets/Menu.png';
import shoppingBagIcon from './assets/shoppingBag.png';
import searchIcon from './assets/Search (2).png';
import logoIcon from './assets/Logo.png';
import addCircleIcon from './assets/add_circle.png';

const products = [
  { id: '1', imgSrc: dress4, name: 'Office Wear', subname: 'reversible angora cardigan', price: 120 },
  { id: '2', imgSrc: dress5, name: 'Black ', subname: 'reversible angora cardigan', price: 120 },
  { id: '3', imgSrc: dress3, name: 'Church Wear', subname: 'reversible angora cardigan', price: 120 },
  { id: '4', imgSrc: dress4, name: 'Lamerei ', subname: 'reversible angora cardigan', price: 120 },
  { id: '5', imgSrc: dress5, name: '21 WN ', subname: 'reversible angora cardigan', price: 120 },
  { id: '6', imgSrc: dress3, name: 'Lopo', subname: 'reversible angora cardigan', price: 120 },
  { id: '5', imgSrc: dress5, name: '21WN ', subname: 'reversible angora cardigan', price: 120 },
  { id: '6', imgSrc: dress3, name: 'lame', subname: 'reversible angora cardigan', price: 120 },
];

function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.product}>
      <View style={styles.imageContainer}>
        <Image source={item.imgSrc} style={styles.productImage} />
        <Image source={addCircleIcon} style={styles.addCircleIcon} />
      </View>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.subName} numberOfLines={1}>{item.subname}</Text>
      
      <Text style={styles.productPrice}>${item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={menuIcon} style={styles.topIcon} />
        <Image source={logoIcon} style={styles.logoIcon} />
        <Image source={shoppingBagIcon} style={styles.topIcon} />
        <Image source={searchIcon} style={styles.topIcon} />
      </View>
      <View style={styles.subHeaderContainer}>
        <Text style={styles.header}>OUR STORY</Text>
        <Image source={listviewIcon} style={styles.icon} />
        <Image source={filterIcon} style={styles.icon} />
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
      <Button
        title="Go to Checkout"
        onPress={() => navigation.navigate('Checkout')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Checkout" component={CheckoutPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  subHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoIcon: {
    marginLeft: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 100,
    textTransform: 'uppercase',
  },
  topIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  productList: {
    alignItems: 'center',
  },
  product: {
    borderWidth: 0,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    width: '40%',
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: 139,
    height: 200,
    marginTop: -10,
    marginBottom: 10,
  },
  addCircleIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 24,
    height: 24,
  },
  productName: {
    marginRight: 40,
  },
  subName: {
    
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
    textAlign: 'auto',
    marginRight: 10,
    
  },
  productPrice: {
    fontSize: 14,
    color: '#555',
    marginRight: 80,
  },
});
