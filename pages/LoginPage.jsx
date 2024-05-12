import { StatusBar } from "expo-status-bar";

import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { APP_NAME, colors } from "../constants";
import { useNavigation } from "@react-navigation/native";

export default function LoginPage() {
  const [rememberMeClick, setRememberMeClick] = useState(false);
  const { username, setUsername } = useState("");
  const { password, setPassword } = useState("");
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../assets/bg.jpg")}
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <SafeAreaView style={styles.container}>
        {/* <Image source={logo} style={styles.image} resizeMode="contain" /> */}
        <Text style={styles.title}>{APP_NAME}</Text>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputView}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <TextInput
              style={styles.input}
              placeholder="EMAIL OR USERNAME"
              value={username}
              onChangeText={setUsername}
              autoCorrect={false}
              autoCapitalize="none"
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <TextInput
              style={styles.input}
              placeholder="PASSWORD"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              autoCorrect={false}
              autoCapitalize="none"
            />
          </View>
        </View>
        <View style={styles.rememberView}>
          <View style={styles.switch}>
            <Switch
              value={rememberMeClick}
              onValueChange={setRememberMeClick}
              trackColor={{ true: "green", false: "gray" }}
            />
            <Text style={styles.rememberText}>Remember Me</Text>
          </View>
          <View>
            <Pressable onPress={() => Alert.alert("Forget Password!")}>
              <Text style={styles.forgetText}>Forgot Password?</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.buttonView}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("PharmacyHome")}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </Pressable>
        </View>

        <Text style={styles.footerText}>
          Don't Have Account?
          <Text
            style={styles.signup}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            {" "}
            Sign Up
          </Text>
        </Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 70,
  },
  image: {
    height: 160,
    width: 170,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 40,
    color: colors.black,
  },
  inputView: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 5,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 20,
    borderColor: colors.black,
    borderWidth: 1,

    //TODO:uncomment if you want rounded corners
    // borderRadius: 7,
  },
  rememberView: {
    width: "100%",
    paddingHorizontal: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8,
  },
  switch: {
    flexDirection: "row",
    gap: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rememberText: {
    fontSize: 13,
  },
  forgetText: {
    fontSize: 11,
    color: colors.black,
  },
  button: {
    backgroundColor: colors.black,
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 50,
  },
  optionsText: {
    textAlign: "center",
    paddingVertical: 10,
    color: "gray",
    fontSize: 13,
    marginBottom: 6,
  },
  mediaIcons: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 23,
  },
  icons: {
    width: 40,
    height: 40,
  },
  footerText: {
    textAlign: "center",
    color: "gray",
  },
  signup: {
    color: colors.black,
    fontSize: 13,
  },
});
