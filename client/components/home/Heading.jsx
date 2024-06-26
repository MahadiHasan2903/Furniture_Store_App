import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "@/constants/index";
import { Entypo } from "@expo/vector-icons";
import styles from "@/styles/Home/heading.style";
import { router } from "expo-router";

const Heading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Arrivals</Text>
        <TouchableOpacity onPress={() => router.push("(routes)/new-arrivals")}>
          <Entypo name="grid" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;
