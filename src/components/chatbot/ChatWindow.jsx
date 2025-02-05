import React, { useState, useEffect, useRef } from "react";
import { Send, Mic, StopCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const ChatWindow = ({ messages, onSendMessage, isVoiceEnabled, onVoiceInput }) => {
    const [input, setInput] = useState("");
    const [recording, setRecording] = useState(false);
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = () => {
        if (input.trim()) {
            onSendMessage(input);
            setInput("");
        }
    };

    const handleVoiceInput = () => {
        if (recording) {
            onVoiceInput("stop");
            setRecording(false);
        } else {
            onVoiceInput("start");
            setRecording(true);
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto shadow-lg rounded-2xl border p-4">
            <CardContent className="h-96 overflow-y-auto flex flex-col gap-2">
                {messages.map((msg, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.3 }}
                        className={`p-2 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-black self-start"}`}
                    >
                        {msg.text}
                    </motion.div>
                ))}
                <div ref={chatEndRef} />
            </CardContent>

            <div className="flex items-center gap-2 p-2 border-t">
                <Input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-grow"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button onClick={handleSendMessage} size="icon">
                    <Send size={18} />
                </Button>
                {isVoiceEnabled && (
                    <Button onClick={handleVoiceInput} size="icon" variant={recording ? "destructive" : "default"}>
                        {recording ? <StopCircle size={18} /> : <Mic size={18} />}
                    </Button>
                )}
            </div>
        </Card>
    );
};

export default ChatWindow;
