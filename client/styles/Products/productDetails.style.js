import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@/constants/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    width: SIZES.width - 44,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: SIZES.xxLarge,
    zIndex: 999,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    marginTop: -SIZES.large,
    paddingBottom: "90px",
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
    paddingRight: 10,
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: SIZES.width - 44,
    top: 20,
  },

  title: {
    fontFamily: "Poppins-Bold",
    fontSize: SIZES.large,
  },
  price: {
    fontFamily: "Poppins-SemiBold",
    fontSize: SIZES.large,
    paddingHorizontal: 10,
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
  },

  rattingRow: {
    flexDirection: "row", //this is not working somehow
    justifyContent: "space-between", //this is not working somehow
    paddingBottom: SIZES.small,
    alignItems: "center",
    width: SIZES.width - 10,
    top: 5,
  },
  rating: {
    top: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: SIZES.large,
  },
  ratingText: {
    color: COLORS.gray,
    fontFamily: "Poppins-Medium",
    paddingHorizontal: SIZES.xSmall,
  },

  descriptionWrapper: {
    marginTop: SIZES.large * 2,
    marginHorizontal: SIZES.large,
  },
  description: {
    fontFamily: "Poppins-Medium",
    fontSize: SIZES.large - 2,
  },
  descriptionText: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.small,
    textAlign: "justify",
    marginBottom: SIZES.small,
  },

  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    padding: 5,
    borderRadius: SIZES.large,
    marginHorizontal: 12,
  },

  cartRow: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: SIZES.width,
    paddingRight: 12,
  },
  cartBtn: {
    width: SIZES.width * 0.7,
    backgroundColor: COLORS.black,
    padding: SIZES.small / 2,
    borderRadius: SIZES.large,
    marginLeft: 12,
  },

  cartTitle: {
    marginLeft: SIZES.small,
    fontFamily: "Poppins-Bold",
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
  },

  addToCart: {
    width: 37,
    height: 37,
    borderRadius: 50,
    margin: SIZES.small,
    backgroundColor: COLORS.black,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
