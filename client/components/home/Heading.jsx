import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "@/constants/index";
import { Entypo } from "@expo/vector-icons";
import styles from "@/styles/Home/heading.style";

const Heading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Arrivals</Text>
        <TouchableOpacity>
          <Entypo name="grid" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;
