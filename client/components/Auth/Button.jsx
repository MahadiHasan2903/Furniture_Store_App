import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "@/constants/index";

const Button = ({ title, loading, isValid, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.btnStyle(!isValid ? COLORS.gray : COLORS.primary)}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.btnText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnText: {
    fontFamily: "Poppins-Bold",
    color: COLORS.white,
    fontSize: 18,
  },
  btnStyle: (backgroundColor) => ({
    height: 50,
    width: "100%",
    marginVertical: 20,
    backgroundColor: backgroundColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  }),
});
