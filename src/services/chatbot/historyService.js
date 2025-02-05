// frontend/src/services/chatbot/historyService.js

class HistoryService {
    constructor() {
      this.historyKey = 'chatbot-history'; // LocalStorage key to store chat history
    }
  
    // Retrieves the conversation history from LocalStorage
    getHistory() {
      const history = localStorage.getItem(this.historyKey);
      return history ? JSON.parse(history) : [];
    }
  
    // Adds a new message to the conversation history
    addMessage(message) {
      const history = this.getHistory();
      history.push(message);
      this._updateHistory(history);
    }
  
    // Clears the conversation history
    clearHistory() {
      this._updateHistory([]);
    }
  
    // Private method to update the conversation history in LocalStorage
    _updateHistory(history) {
      localStorage.setItem(this.historyKey, JSON.stringify(history));
    }
  
    // Retrieves a specific message from the conversation history by index
    getMessageAtIndex(index) {
      const history = this.getHistory();
      return history[index] || null;
    }
  
    // Deletes a specific message from the conversation history by index
    deleteMessageAtIndex(index) {
      const history = this.getHistory();
      if (index >= 0 && index < history.length) {
        history.splice(index, 1);
        this._updateHistory(history);
      }
    }
  
    // Returns the total number of messages in the history
    getHistoryCount() {
      return this.getHistory().length;
    }
  }
  
  const historyService = new HistoryService();
  export default historyService;
  