import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React from "react";
import useFetch from "@/hooks/useFetch";
import { COLORS, SIZES } from "@/constants/index";
import styles from "@/styles/Products/productList.style";
import ProductCardView from "./ProductCardView";

const ProductList = () => {
  const { data, loading, error } = useFetch();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <ProductCardView item={item} />}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default ProductList;
