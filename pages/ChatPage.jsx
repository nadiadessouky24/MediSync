import { useCallback, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { colors } from "../constants";
import { getChat, sendMessage } from "../api/chats";
import { USER } from "../constants";

export default function ChatPage(props) {
  const id = props.route.params.id;
  const [messages, setMessages] = useState([]);

  const [chat, setChat] = useState({
    messages: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getChat(id)
      .then((c) => setChat(c))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 2,
  //       text: "Hello! I'm glad you reached out. Of course, I'd be happy to help. Please go ahead and share your lab results with me. I'll review them and provide you with the necessary information and guidance.",
  //       createdAt: "2024-04-01T12:00:00Z",
  //       user: {
  //         _id: 1,
  //         name: "Youssef",
  //         avatar: "https://picsum.photos/seed/picsum/200/300",
  //       },
  //     },
  //     {
  //       _id: 1,
  //       text: "Hi Dr. Roaa, I hope you're doing well. I have a question about my recent lab results. Can we discuss them?",
  //       createdAt: "2024-04-18T00:00:00Z",
  //       user: {
  //         _id: 2,
  //         name: "React Native",
  //         avatar: "https://picsum.photos/seed/picsum/200/300",
  //       },
  //     },
  //   ]);
  // }, []);

  const onSend = useCallback((messages = []) => {
    sendMessage(id, messages[0]).then((newChat) =>
      setChat((prev) => {
        return {
          ...prev,
          messages: GiftedChat.append(prev.messages, messages),
        };
      })
    );
  }, []);

  return (
    <GiftedChat
      inverted={false}
      messagesContainerStyle={{ backgroundColor: "white" }}
      messages={chat.messages}
      onSend={(messages) => onSend(messages)}
      showUserAvatar
      renderUsernameOnMessage
      renderAvatarOnTop
      renderUsername={(user) => (
        <View
          style={{ display: "flex", flex: 1, marginLeft: 7, marginBottom: 3 }}
        >
          <Text
            style={{
              color: "orange",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {user.name}
          </Text>
        </View>
      )}
      user={USER}
    />
  );
}
