// frontend/src/store/reducers/chatbotReducer.js

const initialState = {
  conversation: [],       // Array of chatbot messages (user + bot)
  loading: false,          // Flag for loading state
  error: null,             // Error state for handling API failures
};

const chatbotReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        ...state,
        conversation: [...state.conversation, action.payload],
        loading: true,
      };
    case 'RECEIVE_MESSAGE':
      return {
        ...state,
        conversation: [...state.conversation, action.payload],
        loading: false,
      };
    case 'CHATBOT_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default chatbotReducer;
