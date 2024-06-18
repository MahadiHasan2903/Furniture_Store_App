import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "@/styles/NewArrivals/newArrivals.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "@/constants/index";
import { router } from "expo-router";
import { ProductList } from "@/components/products";

const NewArrivals = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.upperRow}>
            <TouchableOpacity onPress={() => router.push("/home")}>
              <Ionicons
                name="chevron-back-circle"
                size={30}
                color={COLORS.lightWhite}
              />
            </TouchableOpacity>
            <Text style={styles.heading}>Products</Text>
          </View>
          <ProductList />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default NewArrivals;
