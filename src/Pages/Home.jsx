import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import MessageList from '../components/MessageList';

const ENDPOINT = "http://localhost:5000"; // Backend server

const Home = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on('new_sms', (message) => {
      setMessages((prevMessages) => [message, ...prevMessages]);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-2xl mx-auto bg-gray-200 rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold text-red-800 text-center mb-8">
          Received SMS Messages
        </h1>
        <MessageList messages={messages} />
      </div>
    </div>
  );
};

export default Home;
