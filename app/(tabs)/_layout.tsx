import { Tabs } from "expo-router";
import React from "react";
import {Ionicons} from "@expo/vector-icons"
import { StatusBar } from "react-native";

export default function TabsLayout() {
  return <Tabs
    screenOptions={{
        tabBarActiveTintColor: "blue",
        headerStyle: {
            backgroundColor: 'green'
        },
        headerTintColor: 'purple',
        tabBarStyle: {
            backgroundColor: 'teal'
        }
    }}
  >
    <Tabs.Screen name="index" 
    options={{
      headerTitle: "Start Screen",
      headerLeft: () => <></>,
      tabBarIcon: ({focused, color}) => (
        <Ionicons 
            name= {focused ? "home-sharp" : "home-outline"} 
            size={24}
     />
      ),
    }}
    />
    <Tabs.Screen name="about"  
    options={{
      headerTitle: "About",
      tabBarIcon: ({focused, color}) => (
        <Ionicons 
            name= {focused ? "information-circle" : "information-circle-outline"} 
            size={24}
     />
      ),
    }}/>

    <Tabs.Screen name="+not-found"  options={{
        headerTitle: "Oops! Not Found"
        }}/>
  </Tabs>;
}
