import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackButton, Button } from "@/components/Auth";
import { router } from "expo-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "@/constants/index";
import styles from "@/styles/Auth/signIn.style";

export const loginSchema = z.object({
  email: z.string().email("Provide a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [fieldTouched, setFieldTouched] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const handleLogIn = (data) => {
    console.log(data); // Replace with actual login logic
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
                  borderColor:
                    fieldTouched === "email" ? COLORS.primary : COLORS.offWhite,
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
                      value={value}
                      placeholder="Enter your email"
                      placeholderTextColor={COLORS.gray}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      onFocus={() => setFieldTouched("email")}
                      onBlur={() => setFieldTouched("email", "")}
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
                  borderColor:
                    fieldTouched === "password"
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
                      value={value}
                      placeholder="Enter your password"
                      placeholderTextColor={COLORS.gray}
                      autoCapitalize="none"
                      autoCorrect={false}
                      onFocus={() => setFieldTouched("password")}
                      onBlur={() => setFieldTouched("password", "")}
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

            <Button title="Login" onPress={handleSubmit(handleLogIn)} />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignIn;
