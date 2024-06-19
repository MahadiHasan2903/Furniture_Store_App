import React, { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackButton, Button } from "@/components/Auth";
import { router } from "expo-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BASE_URL } from "@/config/constants";
import { COLORS } from "@/constants/index";
import styles from "@/styles/Auth/signIn.style";
import { useAuth } from "@/config/AuthContext";

export const loginSchema = z.object({
  email: z.string().email("Provide a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const SignIn = () => {
  const { userCredentials } = useAuth();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  // Function to handle empty form submission alert message
  const handleInvalidFormSubmit = () => {
    Alert.alert(
      "Invalid Form",
      "Please provide all required fields",
      [
        { text: "Cancel", onPress: () => {} },
        { text: "Continue", onPress: () => {} },
      ],
      { defaultIndex: 1 }
    );
  };

  // Function to handle login
  const handleLogIn = async (data) => {
    try {
      setLoading(true);

      const response = await axios.post(`${BASE_URL}/login`, data);

      if (response.data.success) {
        // Save user data to AsyncStorage
        await AsyncStorage.setItem(
          "userData",
          JSON.stringify(response.data.user)
        );
        await AsyncStorage.setItem("accessToken", response.data.accessToken);

        // Update context with user and token
        userCredentials(response.data.user, response.data.accessToken);

        // Navigate to home or any other screen
        router.push("/home");

        Alert.alert(
          "Login Successful",
          "Welcome back! You are successfully logged in.",
          [{ text: "Continue", onPress: () => {} }],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          "Login Failed",
          "Invalid credentials. Please try again.",
          [{ text: "Retry", onPress: () => {} }],
          { cancelable: false }
        );
      }
    } catch (error) {
      console.error("Error while logging in:", error);
      Alert.alert(
        "Error",
        "An error occurred during login. Please try again later.",
        [{ text: "OK", onPress: () => {} }],
        { cancelable: false }
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <ScrollView>
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <View>
          <BackButton onPress={() => router.back()} />

          <Image
            source={require("@/assets/images/bk.png")}
            style={styles.cover}
          />
          <Text style={styles.title}>Unlimited Luxurious Furniture</Text>

          <View>
            <View style={styles.wrapper}>
              <Text style={styles.label}>Email</Text>
              <View
                style={styles.inputWrapper({
                  borderColor: touchedFields.email
                    ? COLORS.primary
                    : COLORS.offWhite,
                })}
              >
                <MaterialCommunityIcons
                  name="email-outline"
                  size={20}
                  color={COLORS.gray}
                />
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={{ flex: 1, marginLeft: 10 }}
                      onChangeText={onChange}
                      value={value || ""}
                      placeholder="Enter your email"
                      placeholderTextColor={COLORS.gray}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      onBlur={onBlur}
                    />
                  )}
                />
              </View>
              {errors.email && (
                <Text style={styles.errorMessage}>{errors.email.message}</Text>
              )}
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.label}>Password</Text>
              <View
                style={styles.inputWrapper({
                  borderColor: touchedFields.password
                    ? COLORS.primary
                    : COLORS.offWhite,
                })}
              >
                <MaterialCommunityIcons
                  name="lock-outline"
                  size={20}
                  color={COLORS.gray}
                />
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      secureTextEntry={!visible}
                      style={{ flex: 1, marginLeft: 10 }}
                      onChangeText={onChange}
                      value={value || ""}
                      placeholder="Enter your password"
                      placeholderTextColor={COLORS.gray}
                      autoCapitalize="none"
                      autoCorrect={false}
                      onBlur={onBlur}
                    />
                  )}
                />
                <TouchableOpacity
                  onPress={() => {
                    setVisible(!visible);
                  }}
                >
                  <MaterialCommunityIcons
                    size={18}
                    name={visible ? "eye-outline" : "eye-off-outline"}
                    color={COLORS.gray}
                  />
                </TouchableOpacity>
              </View>
              {errors.password && (
                <Text style={styles.errorMessage}>
                  {errors.password.message}
                </Text>
              )}
            </View>

            <Button
              title="L O G I N"
              isValid={isValid}
              loading={loading}
              onPress={
                isValid ? handleSubmit(handleLogIn) : handleInvalidFormSubmit
              }
            />
            <Text style={styles.registrationLink}>
              Don't have any account?{" "}
              <Text
                onPress={() => router.push("(auth)/sign-up")}
                style={{ fontWeight: 700, color: COLORS.primary }}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignIn;
