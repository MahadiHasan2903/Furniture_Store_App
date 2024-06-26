import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { AuthProvider } from "../config/AuthContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  let [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Light": require("@/assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("@/assets/fonts/Poppins-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  const screenNames = [
    "(tabs)",
    "(auth)/sign-in",
    "(auth)/sign-up",
    "(routes)/cart/index",
    "(routes)/orders/index",
    "(routes)/favorites/index",
    "(routes)/new-arrivals/index",
    "(routes)/product-details/[productId]",
    "index",
  ];

  return (
    <AuthProvider>
      <Stack>
        {screenNames.map((name) => (
          <Stack.Screen
            key={name}
            name={name}
            options={{ headerShown: false }}
          />
        ))}
      </Stack>
    </AuthProvider>
  );
}
