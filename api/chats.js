import { chats } from "./data/chatsData";

export function getAllChats() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(chats);
    }, 1000);
  });
}

export function addChat({ name }) {
  const chat = {
    id: chats.length + 1,
    name,
    messages: [],
    unreadMessages: 0,
    lastMessageTime: "",
    lastMessagestatus: "",
    image: "https://picsum.photos/seed/picsum/200/300",
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      chats.push(chat);
      resolve(chat);
    }, 1000);
  });
}

export function getChat(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const chat = chats.find((chat) => chat.id === id);

      if (!chat) reject("Chat not found", id);

      resolve(chat);
    }, 1000);
  });
}

export function sendMessage(chatId, message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const chat = chats.find((chat) => chat.id === chatId);

      if (!chat) reject("Chat not found", chatId);

      message._id= chat.messages.length + 1;
      chat.messages.push(message);
      // chat.unreadMessages += 1;
      chat.lastMessageTime = message.time;
      chat.lastMessagestatus = message.status?? "SENT";

      console.log(chat)
      resolve(chat);
    }, 250);
  });
}
