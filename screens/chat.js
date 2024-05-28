import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));
  };

  return <GiftedChat messages={messages} onSend={(messages) => onSend(messages)} user={{ _id: 1 }} />;
};

export default Chat;
