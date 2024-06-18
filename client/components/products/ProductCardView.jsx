import { TouchableOpacity, Text, View, Image } from "react-native";
import React from "react";
import styles from "@/styles/Products/productCardView.style";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { COLORS, SIZES } from "@/constants/index";

const ProductCardView = () => {
  return (
    <TouchableOpacity onPress={() => router.push("/product-details")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://www.constructionplacements.com/wp-content/uploads/2021/08/10-Best-Essential-Living-Room-Furniture-items-for-your-sweet-home.jpg",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.price} numberOfLines={1}>
            $321
          </Text>
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
