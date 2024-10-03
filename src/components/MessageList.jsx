import React from 'react';
import MessageItem from './MessageItem';

const MessageList = ({messages}) => {
    return (
        <ul className="space-y-4">
            {messages.map((msg, index) => (
                <MessageItem key={index} sender={msg.sender} message={msg.message} />
            ))}
        </ul>
    );
};

export default MessageList;