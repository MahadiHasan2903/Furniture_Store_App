import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // Load user data from AsyncStorage on component mount (if available)
    const loadUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem("userData");
        const token = await AsyncStorage.getItem("accessToken");
        if (userData && token) {
          setUser(JSON.parse(userData));
          setAccessToken(token);
        }
      } catch (error) {
        console.error("Error loading user data from AsyncStorage:", error);
      }
    };

    loadUserData();
  }, []);

  // Function to update user and token
  const userCredentials = (userData, token) => {
    setUser(userData);
    setAccessToken(token);
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, userCredentials }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
