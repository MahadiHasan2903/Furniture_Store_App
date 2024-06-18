import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Products/productDetails.style";
import {
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { COLORS, SIZES } from "@/constants/index";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { BASE_URL } from "@/config/constants";
const ProductDetails = () => {
  const item = useLocalSearchParams();
  const [product, setProduct] = useState({});

  // Function to fetch product details
  const fetchProductDetails = async () => {
    const response = await axios.get(
      `${BASE_URL}/get-product/${item.productId}`
    );

    setProduct(response.data.product);
  };

  //Using this for  fetching the image of the product
  useEffect(() => {
    fetchProductDetails();
  }, []);

  console.log("Item:", item);
  const [count, setCount] = useState(1);

  const handleIncrementCount = () => {
    setCount(count + 1);
  };

  const handleDecrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Upper row with back button and favorite button */}
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back-circle" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="heart" size={30} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        {/* Image section */}
        <Image source={product?.image?.url} style={styles.image} />

        {/* Product details */}
        <View style={styles.details}>
          {/* Title and price row */}
          <View style={styles.titleRow}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>$ {item.price}</Text>
            </View>
          </View>

          {/* Ratings and quantity row */}
          <View
            style={{
              ...styles.ratingRow,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.rating}>
              {[1, 2, 3, 4, 5].map((index) => (
                <Ionicons key={index} name="star" size={24} color="gold" />
              ))}
              <Text style={styles.ratingText}>(4.9)</Text>
            </View>
            <View style={styles.rating}>
              <TouchableOpacity onPress={handleIncrementCount}>
                <SimpleLineIcons name="plus" size={20} />
              </TouchableOpacity>
              <Text style={styles.ratingText}>{count}</Text>
              <TouchableOpacity onPress={handleDecrementCount}>
                <SimpleLineIcons name="minus" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Description */}
          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>

          {/* Location and delivery */}
          <View style={{ marginBottom: SIZES.small }}>
            <View style={styles.location}>
              <View style={{ flexDirection: "row" }}>
                <Ionicons name="location-outline" size={20} />
                <Text style={{ paddingHorizontal: 5 }}>Dhaka</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="truck-delivery-outline"
                  size={20}
                />
                <Text style={{ paddingHorizontal: 5 }}>Free Delivery</Text>
              </View>
            </View>
          </View>

          {/* Buy now and add to cart buttons */}
          <View style={styles.cartRow}>
            <TouchableOpacity style={styles.cartBtn} onPress={() => {}}>
              <Text style={styles.cartTitle}>Buy Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addToCart} onPress={() => {}}>
              <Fontisto
                name="shopping-bag"
                size={22}
                color={COLORS.lightWhite}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
