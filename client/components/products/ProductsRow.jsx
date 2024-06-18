import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { COLORS, SIZES } from "@/constants/index";
import ProductCardView from "./ProductCardView";
import styles from "@/styles/Products/productRow.style";
import useFetch from "@/hooks/useFetch";

const ProductsRow = () => {
  const { data, loading, error } = useFetch();

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  );
};

export default ProductsRow;
