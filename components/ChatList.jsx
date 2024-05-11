import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export const MESSAGE_STATUS = {
  SENT: "sent",
  RECEIVED: "received",
  READ: "read",
  DELIVERED: "delivered",
};

export default ChatListItem = ({
  chatRoom: {
    id,
    image,
    name,
    messages,
    unreadMessages,
    lastMessageTime,
    status,
  },

  onPress = () => {},
}) => {
  const lastMessage = messages.length ? messages[messages.length - 1].text : "";
  const chatRoom = {
    id: id,
    image: image,
    name: name,
    message: lastMessage,
    unreadMessages,
    lastMessageTime: lastMessageTime,
    status: status,
  };

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        paddingRight: 10
      }}
    >
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          flexDirection: "row",
          paddingVertical: 15,
          paddingRight: 10,
          paddingLeft: 10,
          borderBottomWidth: 1,
          borderBottomColor: "lightgrey",
        }}
        onPress={onPress}
      >
        <Image
          source={{ uri: chatRoom.image }}
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
          }}
        />

        <View
          style={{
            marginLeft: 10,
            flex: 1,
            justifyContent: "center",
            rowGap: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {chatRoom.name}
            </Text>

            <Text style={{ fontSize: 14 }}>{chatRoom.lastMessageTime}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {}

            <Text style={{ fontSize: 14 }} numberOfLines={1}>
              {chatRoom.message}
            </Text>

            {chatRoom.unreadMessages > 0 && (
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: "#3777f0",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>
                  {chatRoom.unreadMessages}
                </Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
