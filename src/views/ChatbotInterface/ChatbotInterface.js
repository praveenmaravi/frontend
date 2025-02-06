import React, { useState, useEffect } from 'react';
import { useChatbot } from './hooks/useChatbot';
import { useEmotionAnalysis } from './hooks/useEmotionAnalysis';
import { useQuickReplies } from './hooks/useQuickReplies';
import ChatWindow from './components/ChatWindow/ChatMessages';
import MessageInput from './components/ChatWindow/MessageInput';
import ChatLoader from './components/ChatWindow/ChatLoader';
import ChatHeader from './components/ChatWindow/ChatHeader';
import QuickReplyButton from './components/QuickReplies/QuickReplyButton';
import EmotionIcon from './components/EmotionAnalysis/EmotionIcon';
import ChatbotAvatar from './components/ChatbotAvatar/ChatbotAvatar';
import NotificationBanner from './components/Notifications/NotificationBanner';
import { sendMessage } from './services/chatbotService';
import { getEmotion } from './services/emotionService';
import { logAnalytics } from './services/analyticsService';

const ChatbotInterface = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [emotion, setEmotion] = useState(null);

  const { sendMessage: sendChatMessage, botMessages } = useChatbot();
  const { analyzeEmotion } = useEmotionAnalysis();
  const { quickReplies } = useQuickReplies();

  const handleSendMessage = async () => {
    if (userMessage.trim()) {
      setLoading(true);
      const newMessage = {
        sender: 'user',
        content: userMessage,
      };
      setChatMessages([...chatMessages, newMessage]);
      setUserMessage('');

      // Analyze emotion before sending to the bot
      const detectedEmotion = await analyzeEmotion(userMessage);
      setEmotion(detectedEmotion);

      // Send message to chatbot and handle response
      const botResponse = await sendChatMessage(userMessage);
      const botMessage = {
        sender: 'bot',
        content: botResponse,
      };
      setChatMessages([...chatMessages, newMessage, botMessage]);
      logAnalytics(userMessage, botResponse, detectedEmotion); // Track interaction

      setLoading(false);
    }
  };

  useEffect(() => {
    if (botMessages.length > 0) {
      setChatMessages(prevMessages => [...prevMessages, ...botMessages]);
    }
  }, [botMessages]);

  return (
    <div className="chatbot-interface">
      <ChatHeader />
      <div className="chat-container">
        <div className="chat-window">
          <ChatWindow messages={chatMessages} />
          {loading && <ChatLoader />}
        </div>
        <div className="quick-replies">
          {quickReplies.map((reply, index) => (
            <QuickReplyButton key={index} reply={reply} onClick={() => handleSendMessage(reply)} />
          ))}
        </div>
        <div className="emotion-analysis">
          {emotion && <EmotionIcon emotion={emotion} />}
        </div>
        <MessageInput
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onSend={handleSendMessage}
        />
      </div>
      <ChatbotAvatar />
      <NotificationBanner />
    </div>
  );
};

export default ChatbotInterface;
