import { useState } from 'react';

/**
 * Custom hook to manage quick replies for the chatbot.
 * This hook handles the state of quick reply options and user selection.
 */
const useQuickReplies = (initialReplies = []) => {
  const [quickReplies, setQuickReplies] = useState(initialReplies);
  const [selectedReply, setSelectedReply] = useState(null);

  /**
   * Handles the selection of a quick reply.
   * @param {string} reply - The reply selected by the user.
   */
  const handleReplySelection = (reply) => {
    setSelectedReply(reply);
    // You can add logic here to send the selected reply to the chatbot API
    // For example, sendReplyToChatbot(reply);
  };

  /**
   * Updates the list of quick replies.
   * @param {Array} newReplies - The new set of quick replies.
   */
  const updateQuickReplies = (newReplies) => {
    setQuickReplies(newReplies);
  };

  return {
    quickReplies,
    selectedReply,
    handleReplySelection,
    updateQuickReplies
  };
};

export default useQuickReplies;
