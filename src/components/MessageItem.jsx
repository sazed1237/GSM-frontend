import React from 'react';

const MessageItem = ({ sender, message }) => {
    return (
        <li className="bg-white shadow-lg rounded-lg p-4 mb-4">
            <p className="font-bold text-gray-700">
                From: <span className="text-blue-500">{sender}</span>
            </p>
            <p className="text-gray-600 mt-2">
                Message: <span>{message}</span>
            </p>
        </li>
    );
};

export default MessageItem;