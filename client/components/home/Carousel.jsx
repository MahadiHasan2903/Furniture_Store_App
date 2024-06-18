import { View, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "@/constants/index";
import { SliderBox } from "react-native-image-slider-box";
import banner1 from "@/assets/images/fn1.jpg";
import banner2 from "@/assets/images/fn2.jpg";
import banner3 from "@/assets/images/fn3.jpg";

const Carousel = () => {
  const bannerData = [banner1, banner2, banner3];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={bannerData}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          width: "93%",
          borderRadius: 15,
          marginTop: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
