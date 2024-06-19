import React, { useState } from "react";
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
import { COLORS } from "@/constants/index";
import styles from "@/styles/Auth/signUp.style";
import axios from "axios";
import { BASE_URL } from "@/config/constants";

export const registrationSchema = z.object({
  username: z.string().min(2, "Username should not be empty"),
  location: z.string().min(2, "Location should not be empty"),
  email: z.string().email("Provide a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm({
    resolver: zodResolver(registrationSchema),
  });

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

  //Function to handle user registration
  const handleRegistration = async (data) => {
    try {
      setLoading(true);

      const response = await axios.post(`${BASE_URL}/register`, data);

      if (response.data.success) {
        router.push("/sign-in");
        Alert.alert(
          "Registration Successful",
          "Welcome! Your registration was successful.",
          [{ text: "Continue", onPress: () => {} }],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          "Registration Failed",
          response.data.message || "Invalid credentials. Please try again.",
          [{ text: "Retry", onPress: () => {} }],
          { cancelable: false }
        );
      }
    } catch (error) {
      console.error("Error while registering:", error);
      Alert.alert(
        "Error",
        "An error occurred during registration. Please try again later.",
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
              <Text style={styles.label}>Username</Text>
              <View
                style={styles.inputWrapper({
                  borderColor: touchedFields.username
                    ? COLORS.primary
                    : COLORS.offWhite,
                })}
              >
                <MaterialCommunityIcons
                  name="face-man-profile"
                  size={20}
                  color={COLORS.gray}
                />
                <Controller
                  defaultValue=""
                  control={control}
                  name="username"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={{ flex: 1, marginLeft: 10 }}
                      onChangeText={onChange}
                      value={value}
                      placeholder="Enter your name"
                      placeholderTextColor={COLORS.gray}
                      autoCapitalize="none"
                      autoCorrect={false}
                      onBlur={onBlur}
                    />
                  )}
                />
              </View>
              {errors.username && (
                <Text style={styles.errorMessage}>
                  {errors.username.message}
                </Text>
              )}
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.label}>Location</Text>
              <View
                style={styles.inputWrapper({
                  borderColor: touchedFields.location
                    ? COLORS.primary
                    : COLORS.offWhite,
                })}
              >
                <MaterialCommunityIcons
                  name="map-marker-outline"
                  size={20}
                  color={COLORS.gray}
                />
                <Controller
                  defaultValue=""
                  control={control}
                  name="location"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={{ flex: 1, marginLeft: 10 }}
                      onChangeText={onChange}
                      value={value}
                      placeholder="Enter your location"
                      placeholderTextColor={COLORS.gray}
                      autoCapitalize="none"
                      autoCorrect={false}
                      onBlur={onBlur}
                    />
                  )}
                />
              </View>
              {errors.location && (
                <Text style={styles.errorMessage}>
                  {errors.location.message}
                </Text>
              )}
            </View>

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
                  defaultValue=""
                  control={control}
                  name="email"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={{ flex: 1, marginLeft: 10 }}
                      onChangeText={onChange}
                      value={value}
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
                  defaultValue=""
                  control={control}
                  name="password"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      secureTextEntry={!visible}
                      style={{ flex: 1, marginLeft: 10 }}
                      onChangeText={onChange}
                      value={value}
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
              title="SIGN UP"
              isValid={isValid}
              onPress={
                isValid
                  ? handleSubmit(handleRegistration)
                  : handleInvalidFormSubmit
              }
            />
            <Text style={styles.loginLink}>
              Already have an account?{" "}
              <Text
                onPress={() => router.push("(auth)/sign-in")}
                style={{ fontWeight: "bold", color: COLORS.primary }}
              >
                Sign In
              </Text>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;
