import * as React from "react";
import {
  useWindowDimensions,
  FlatList,
  View,
  ActivityIndicator,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import { FAB } from "@rneui/themed";
import { colors } from "../constants";
import ChatListItem, { MESSAGE_STATUS } from "../components/ChatList";
import { useNavigation } from "@react-navigation/native";
import { getAllChats } from "../api/chats";

export default function ChatsListPage() {
  // const chats = [
  //   {
  //     id: "1",
  //     image: "https://picsum.photos/seed/picsum/200/300",
  //     name: "Doctor 1",
  //     message:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  //     unreadMessages: 0,
  //     lastMessageTime: "11:00",
  //     status: MESSAGE_STATUS.SENT,
  //   },
  //   {
  //     id: "2",
  //     image: "https://picsum.photos/seed/picsum/200/300",
  //     name: "Doctor 2",
  //     message:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  //     unreadMessages: 4,
  //     lastMessageTime: "8:00",
  //     status: MESSAGE_STATUS.RECEIVED,
  //   },
  //   {
  //     id: "3",
  //     image: "https://picsum.photos/seed/picsum/200/300",
  //     name: "Doctor 3",
  //     message:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  //     unreadMessages: 5,
  //     lastMessageTime: "11:00",
  //     status: MESSAGE_STATUS.READ,
  //   },
  // ];

  const [chats, setChats] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    getAllChats()
      .then((c) => setChats(c))
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
  console.log("CHATS:", chats);

  return (
    <>
      <FlatList
        style={{ backgroundColor: "white" }}
        //  flat list for chats
        data={chats}
        renderItem={({ item }) => (
          <ChatListItem
            chatRoom={item}
            onPress={() => {
              console.log("ITEM PRESSED:",item.id)
              navigation.navigate("Chat", {
                id: item.id,
                name: item.name,
                image: item.image,
              });
            }}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <FAB
        onPress={() => {
          navigation.navigate("NewChat");
        }}
        placement="right"
        icon={{ name: "chat", color: "white" }}
        color={colors.primary}
      />
    </>
  );
}
