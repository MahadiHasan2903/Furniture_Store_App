import React from "react";
import { Redirect, router } from "expo-router";
import { useAuth } from "@/config/AuthContext";

const App = () => {
  const { accessToken } = useAuth();
  return (
    <React.Fragment>
      {accessToken ? (
        <Redirect href="/(tabs)/home" />
      ) : (
        <Redirect href="/(auth)/sign-in" />
      )}
    </React.Fragment>
  );
};

export default App;
