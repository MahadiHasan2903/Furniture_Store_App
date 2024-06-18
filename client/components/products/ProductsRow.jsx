import React from "react";
import { View, Text, FlatList } from "react-native";
import { COLORS, SIZES } from "@/constants/index";
import ProductCardView from "./ProductCardView";
import styles from "@/styles/Products/productRow.style";

const ProductsRow = () => {
  const products = [1, 2, 3, 4];

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCardView />}
        horizontal
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default ProductsRow;
