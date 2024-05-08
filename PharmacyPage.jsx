import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";

import ChatsListPage from "./ChatsListPage";

const Tab = createBottomTabNavigator();
// const splash = require("../assets/splash.png");

const PharmacyPage = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      {/* <Text>Home Page</Text> */}
      {/* <Image
        source={splash}
        style={{
          height: "90%",
          width: "90%",
        }}
      /> */}
    </View>
  );
};

export default function TabView() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Pharmacy"
          component={PharmacyPage}
          options={{
            title: "Pharmacy",
            headerTitleStyle: { fontWeight: "bold", textAlign: "center" },
          }}
        />
        <Tab.Screen name="ChatList" component={ChatsListPage} />
      </Tab.Navigator>
    </>
  );
}
