import * as React from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FAB } from "@rneui/themed";
import { colors } from "../constants";
import ChatListItem from "../components/ChatList";
import { useNavigation } from "@react-navigation/native";
import { getAllChats } from "../api/chats";
import AppointmentListItem from "../components/AppointmentsListItem";
import { getAllDoctors } from "../api/doctor";

const Tab = createBottomTabNavigator();

const data = [
  {
    id: 1,
    name: "Doctor 1",
    description:
      "Dermatology and laser Consultant At Air Force specialized hospital",
      image:"https://picsum.photos/200/300"
  },
];

export default function BookAppointmentPage() {
  const [doctors, setDoctors] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    getAllDoctors()
      .then((c) => setDoctors(c))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  const navigation = useNavigation();

  if (loading) {
    return (
      <View
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <>
      <FlatList
        style={{
          backgroundColor: "white",
          flex: 1,
          display: "flex",
          paddingHorizontal: 10,
        }}
        //  flat list for chats
        data={doctors}
        renderItem={({ item }) => {
          return <AppointmentListItem item={item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}
