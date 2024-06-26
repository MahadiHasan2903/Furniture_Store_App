import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@/constants/index";

const styles = StyleSheet.create({
  cover: {
    height: SIZES.height / 3,
    width: SIZES.width - 60,
    resizeMode: "contain",
    marginBottom: SIZES.xxLarge,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    textAlign: "center",
    marginBottom: SIZES.xxLarge,
  },

  wrapper: {
    marginBottom: 20,
  },

  label: {
    fontFamily: "Poppins-Bold",
    fontSize: SIZES.xSmall,
    marginBottom: 5,
    marginEnd: 5,
    textAlign: "right",
  },

  inputWrapper: (borderColor) => ({
    borderColor: borderColor,
    fontSize: COLORS.lightWhite,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    height: 50,
    width: "100%",
    borderRadius: 12,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
  }),

  errorMessage: {
    fontFamily: "Poppins-Regular",
    color: COLORS.red,
    marginTop: 10,
    marginLeft: 10,
    fontSize: SIZES.xSmall,
  },

  loginLink: {
    textAlign: "center",
    color: COLORS.gray,
  },
});

export default styles;
