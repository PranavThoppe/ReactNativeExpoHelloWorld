import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";

export default function RootLayout() {
  return ( 
  <>
    <StatusBar style="light" />
    <Stack>
      <Stack.Screen 
      name="(tabs)" 
      options={{
        headerShown: false,
      }} 
    />
  <Stack.Screen name="+not-found"  options={{
        headerTitle: "Oops! Not Found"
      }} />
    </Stack>
  </>
  );
}
