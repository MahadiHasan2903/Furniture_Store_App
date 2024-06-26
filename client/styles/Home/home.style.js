import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@/constants/index";

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "Poppins-Bold",
    fontSize: 40,
  },
  appBarWrapper: {
    marginTop: 15,
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontFamily: "Poppins-SemiBold",
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cartCount: {
    position: "absolute",
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
    zIndex: 999,
  },
  cartNumber: {
    fontFamily: "Poppins-Regular",
    fontWeight: "600",
    fontSize: 10,
    color: COLORS.lightWhite,
  },
});

export default styles;
