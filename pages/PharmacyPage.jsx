import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, FlatList, View } from "react-native";

import ChatsListPage from "./ChatsListPage";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import BookAppointmentPage from "./BookAppointmentPage";
import ProfilePage from "./ProfilePage";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import PharmacyListItem from "../components/PharmacyListItem";

const Tab = createBottomTabNavigator();
// const splash = require("../assets/splash.png");

const pharmacies = [
  {
    id: 1,
    name: "Pharmacy 1",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 2,
    name: "Pharmacy 2",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 3,
    name: "Pharmacy 3",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 4,
    name: "Pharmacy 4",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 5,
    name: "Pharmacy 5",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 6,
    name: "Pharmacy 6",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 7,
    name: "Pharmacy 7",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 8,
    name: "Pharmacy 8",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
];

const PharmacyPage = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <FlatList
        data={pharmacies}
        renderItem={({ item }) => {
          return (
            <PharmacyListItem
              pharmacy={item}
              onPress={() => {
                navigation.navigate("PharmacyDetails", {
                  pharmacy: item,
                });
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default function TabView() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="BookAppointment"
          component={BookAppointmentPage}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="calendar" color={color} size={26} />
            ),

            title: "Book Appointment",
            headerTitleStyle: { textAlign: "center" },
          }}
        />
        <Tab.Screen
          name="Pharmacy"
          component={PharmacyPage}
          options={{
            title: "Pharmacy",
            headerTitleStyle: { fontWeight: "bold", textAlign: "center" },
            tabBarIcon: () => <MaterialIcon name="calendar-star" size={26} />,
          }}
        />
        <Tab.Screen
          name="ChatList"
          component={ChatsListPage}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="chatbubble-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="person-circle-outline" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
