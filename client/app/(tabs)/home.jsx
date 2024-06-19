import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { router } from "expo-router";
import { Welcome, Carousel, Heading } from "@/components/home";
import styles from "@/styles/Home/home.style";
import { useAuth } from "@/config/AuthContext";
import { ProductsRow } from "@/components/products";

const Home = () => {
  const { user } = useAuth();

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
            <Ionicons name="location-outline" size={24} />
            <Text style={styles.location}>
              {user?.location ? user?.location : "Dhaka, Bangladesh"}
            </Text>
            <View
              style={{
                alignItems: "flex-end",
              }}
            >
              <View style={styles.cartCount}>
                <Text style={styles.cartNumber}>8</Text>
              </View>
              <TouchableOpacity onPress={() => router.push("(routes)/cart")}>
                <Fontisto name="shopping-bag" size={24} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Welcome />
        <Carousel />
        <Heading />
        <ProductsRow />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
