import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@/constants/index";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    marginHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: SIZES.xLarge - 2,
  },
});

export default styles;
