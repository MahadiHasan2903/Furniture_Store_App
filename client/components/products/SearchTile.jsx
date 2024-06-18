import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "@/styles/Products/searchTile.style";
import { router } from "expo-router";

const SearchTile = ({ item }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          router.push({
            pathname: `/product-details/${item._id}`,
            params: item,
          })
        }
      >
        <View style={styles.image}>
          <Image source={{ uri: item.image.url }} style={styles.productImg} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.supplier}>{item.supplier}</Text>
          <Text style={styles.supplier}>${item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchTile;
