import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "@/styles/Profile/profile.style";
import { StatusBar } from "expo-status-bar";
import { COLORS, SIZES } from "@/constants/index";
import { router } from "expo-router";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const Profile = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  //Function to handle logout
  const handleLogout = () => {
    console.log("Logout button pressed");
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Pressed cancel"),
          style: "cancel",
        },
        { text: "Confirm", onPress: () => console.log("Pressed confirm") },
      ],
      { defaultIndex: 1 },
      { cancelable: false }
    );
  };

  //Function to handle delete user account
  const handleDeleteAccount = () => {
    console.log("Delete account button pressed");
    Alert.alert(
      "Delete account",
      "Are you sure you want to delete your account?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Pressed cancel"),
          style: "cancel",
        },
        { text: "Confirm", onPress: () => console.log("Pressed confirm") },
      ],
      { defaultIndex: 1 },
      { cancelable: false }
    );
  };

  //Function to handle clear cache
  const handleClearCache = () => {
    console.log("Clear cache button pressed");
    Alert.alert(
      "Clear account",
      "Are you sure you want to clear your cached data?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Pressed cancel"),
          style: "cancel",
        },
        { text: "Confirm", onPress: () => console.log("Pressed confirm") },
      ],
      { defaultIndex: 1 },
      { cancelable: false }
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.container}>
          <StatusBar backgroundColor={COLORS.gray} />
          <View
            style={{
              width: "100%",
            }}
          >
            <Image
              source={require("@/assets/images/space.jpg")}
              style={styles.cover}
            />
          </View>
          <View style={styles.profileContainer}>
            <Image
              source={require("@/assets/images/profile.jpeg")}
              style={styles.profile}
            />
            <Text style={styles.name}>
              {userLoggedIn
                ? "Mahadi Hasan"
                : "Please logged into your account"}
            </Text>
            {!userLoggedIn ? (
              <TouchableOpacity onPress={() => router.push("(auth)/sign-in")}>
                <View style={styles.loginBtn}>
                  <Text style={styles.menuText}>Login</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <View style={styles.loginBtn}>
                <Text style={styles.menuText}>12mahadihasan@gmail.com</Text>
              </View>
            )}

            {userLoggedIn && (
              <View style={styles.menuWrapper}>
                <TouchableOpacity
                  onPress={() => router.push("(routes)/favorites")}
                >
                  <View style={styles.menuItem(0.2)}>
                    <MaterialCommunityIcons
                      name="heart-outline"
                      size={24}
                      color={COLORS.primary}
                    />
                    <Text style={styles.menuText}>Favorites</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => router.push("(routes)/orders")}
                >
                  <View style={styles.menuItem(0.2)}>
                    <MaterialCommunityIcons
                      name="truck-delivery-outline"
                      size={24}
                      color={COLORS.primary}
                    />
                    <Text style={styles.menuText}>Orders</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push("(routes)/cart")}>
                  <View style={styles.menuItem(0.2)}>
                    <SimpleLineIcons
                      name="bag"
                      size={24}
                      color={COLORS.primary}
                    />
                    <Text style={styles.menuText}>Cart</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleClearCache}>
                  <View style={styles.menuItem(0.2)}>
                    <MaterialCommunityIcons
                      name="cached"
                      size={24}
                      color={COLORS.primary}
                    />
                    <Text style={styles.menuText}>Clear Cache</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDeleteAccount}>
                  <View style={styles.menuItem(0.2)}>
                    <AntDesign
                      name="deleteuser"
                      size={24}
                      color={COLORS.primary}
                    />
                    <Text style={styles.menuText}>Delete Account</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogout}>
                  <View style={styles.menuItem(0.2)}>
                    <AntDesign name="logout" size={24} color={COLORS.primary} />
                    <Text style={styles.menuText}>Logout</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
