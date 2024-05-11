import { StatusBar } from "expo-status-bar";

import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { APP_NAME, colors } from "../constants";
import { useEffect } from "react/cjs/react.production.min";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [signUpData, setSignUpData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassowrd: "",
  });
  const navigation = useNavigation();

  const onChange = (key) => {
    return (value) => {
      setSignUpData({
        ...signUpData,
        [key]: value,
      });
    };
  };


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
        <Text style={styles.title}>{APP_NAME} HERE</Text>
        <Text style={styles.title}>Sign Up</Text>
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
              placeholder="First Name"
              value={signUpData.firstname}
              onChangeText={onChange("firstname")}
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
              placeholder="Last Name"
              value={signUpData.lastname}
              onChangeText={onChange("lastname")}
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
              placeholder="Email"
              value={signUpData.email}
              onChangeText={onChange("email")}
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
              value={signUpData.password}
              onChangeText={onChange("password")}
              autoCorrect={false}
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={styles.buttonView}>
          <Pressable
            style={styles.button}
            onPress={() =>
              Alert.alert("Sign Up data: ", JSON.stringify(signUpData))
            }
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </Pressable>
        </View>

        <Text style={styles.footerText}>
          Already have an Account?
          <Text
            style={styles.signup}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            {" "}
            Login
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
