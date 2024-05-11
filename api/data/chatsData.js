export const MESSAGE_STATUS = {
  SENT: "sent",
  RECEIVED: "received",
  READ: "read",
  DELIVERED: "delivered",
};

export const chats = [
  {
    id: "1",
    image: "https://picsum.photos/seed/picsum/200/300",
    name: "Doctor 1",
    messages: [
      {
        _id: 2,
        text: "Hi Dr. Roaa, I hope you're doing well. I have a question about my recent lab results. Can we discuss them?",
        createdAt: "2024-04-18T00:00:00Z",
        user: {
          _id: 1,
          name: "Nadia",
          avatar: "https://picsum.photos/seed/picsum/200/300",
        },
      },

      {
        _id: 1,
        text: "Hello! I'm glad you reached out. Of course, I'd be happy to help. Please go ahead and share your lab results with me. I'll review them and provide you with the necessary information and guidance.",
        createdAt: "2024-04-01T12:00:00Z",
        user: {
          _id: 2,
          name: "Dr. Roaa",
          avatar: "https://picsum.photos/seed/picsum/200/300",
        },
      },
    ],
    unreadMessages: 0,
    lastMessageTime: "11:00",
    lastMessagestatus: MESSAGE_STATUS.SENT,
  },

  {
    id: "2",
    image: "https://picsum.photos/seed/picsum/200/300",
    name: "Doctor 2",
    messages: [
      {
        _id: 3,
        text: "Hello! I'm glad you reached out. Of course, I'd be happy to help. Please go ahead and share your symptoms with me. I'll review them and provide you with the necessary information and guidance.",
        createdAt: "2024-04-02T12:00:00Z",
        user: {
          _id: 1,
          name: "Dr. Roaa",
          avatar: "https://picsum.photos/seed/picsum/200/300",
        },
      },
      {
        _id: 4,
        text: "Hi Dr. Roaa, I hope you're doing well. I have been feeling unwell lately. Can we discuss my symptoms?",
        createdAt: "2024-04-19T00:00:00Z",
        user: {
          _id: 3,
          name: "Ahmed",
          avatar: "https://picsum.photos/seed/picsum/200/300",
        },
      },
    ],
    unreadMessages: 0,
    lastMessageTime: "12:00",
    lastMessagestatus: MESSAGE_STATUS.READ,
  },
  {
    id: "3",
    image: "https://picsum.photos/seed/picsum/200/300",
    name: "Doctor 3",
    messages: [
      {
        _id: 5,
        text: "Hello! I'm glad you reached out. Of course, I'd be happy to help. Please go ahead and share your concerns with me. I'll review them and provide you with the necessary information and guidance.",
        createdAt: "2024-04-03T12:00:00Z",
        user: {
          _id: 1,
          name: "Dr. Roaa",
          avatar: "https://picsum.photos/seed/picsum/200/300",
        },
      },
      {
        _id: 6,
        text: "Hi Dr. Roaa, I hope you're doing well. I have some concerns about my medication. Can we discuss them?",
        createdAt: "2024-04-20T00:00:00Z",
        user: {
          _id: 4,
          name: "Sara",
          avatar: "https://picsum.photos/seed/picsum/200/300",
        },
      },
    ],
    unreadMessages: 1,
    lastMessageTime: "13:00",
    lastMessagestatus: MESSAGE_STATUS.DELIVERED,
  },
];
