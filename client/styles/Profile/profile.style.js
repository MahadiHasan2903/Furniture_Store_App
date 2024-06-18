import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@/constants/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  cover: {
    height: 290,
    width: "100%",
    resizeMode: "cover",
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
  },
  profile: {
    height: 155,
    width: 155,
    borderRadius: 99,
    borderWidth: 2,
    borderColor: COLORS.primary,
    resizeMode: "cover",
    marginTop: -90,
  },
  name: {
    fontFamily: "Poppins-Bold",
    color: COLORS.primary,
    marginVertical: 5,
  },
  loginBtn: {
    backgroundColor: COLORS.secondary,
    padding: 2,
    borderWidth: 0.4,
    borderColor: COLORS.primary,
    borderRadius: SIZES.xxLarge,
  },

  menuText: {
    fontFamily: "Poppins-Regular",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 26,
    color: COLORS.gray,
    paddingHorizontal: 30,
  },

  menuWrapper: {
    marginTop: SIZES.xxLarge,
    width: SIZES.width - SIZES.large,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
    paddingBottom: "100%",
  },
  menuItem: (borderBottomWidth) => ({
    borderBottomWidth: borderBottomWidth,
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderColor: COLORS.gray,
  }),
});

export default styles;
