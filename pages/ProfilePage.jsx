import React from "react";
import {
  View,
  Text,
  Image,
  Switch,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { USER, colors } from "../constants";
import { Icon } from "react-native-elements/dist/icons/Icon";

const ProfilePage = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: USER.image }} // Replace with your image URL
          style={styles.profileImage}
        />
        <Text style={styles.nameText}>{USER.name}</Text>
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Icon
          name="person"
          style={{ marginRight: 10 }}
          color={colors.primary}
        />
        <Text style={styles.buttonText}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Icon
          name="chat-bubble"
          style={{ marginRight: 10 }}
          color={colors.primary}
        />
        <Text style={styles.buttonText}>Chat Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Icon
          name="notifications"
          style={{ marginRight: 10 }}
          color={colors.primary}
        />
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>

      {/* Repeat for other options */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileContainer: {
    alignItems: "center",
    margin: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  button: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    display: "flex",
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 18,
  },
});

export default ProfilePage;
