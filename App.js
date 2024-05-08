import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/LoginPage";
import SingUpPage from "./pages/SingUpPage";
import PharmacyPage from "./pages/PharmacyPage";
import ChatPage from "./pages/ChatPage";
import NewChatPage from "./pages/NewChatPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Welcome" }}
        />

        <Stack.Screen name="SignUp" component={SingUpPage} />

        <Stack.Screen
          name="Pharmacy"
          component={PharmacyPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="NewChat" component={NewChatPage} />
        <Stack.Screen
          name="Chat"
          component={ChatPage}
          options={({ route }) => ({
            title: route.params.name + " Chat",
            headerTitleAlign:"center",
            headerTitleStyle: { fontWeight: "bold", textAlign: "center" },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
