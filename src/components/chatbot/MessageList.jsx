import React from "react";
import Avatar from "./Avatar";
import { cn } from "../../utils/classNames";

const MessageList = ({ messages }) => {
  return (
    <div className="p-4 space-y-3 overflow-y-auto h-full">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={cn(
            "flex items-start gap-3",
            msg.sender === "user" ? "justify-end" : "justify-start"
          )}
        >
          {msg.sender !== "user" && <Avatar type="bot" />}
          <div
            className={cn(
              "px-4 py-2 rounded-lg max-w-xs md:max-w-md lg:max-w-lg",
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200 text-gray-900"
            )}
          >
            {msg.text}
            <span className="block text-xs text-gray-500 mt-1">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </span>
          </div>
          {msg.sender === "user" && <Avatar type="user" />}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
