import { combineReducers } from 'redux';
import chatbotReducer from './reducers/chatbotReducer';
import userReducer from './reducers/userReducer';
import automationReducer from './reducers/automationReducer';
import settingsReducer from './reducers/settingsReducer';
import analyticsReducer from './reducers/analyticsReducer';
import integrationsReducer from './reducers/integrationsReducer';

const rootReducer = combineReducers({
  chatbot: chatbotReducer,
  user: userReducer,
  automation: automationReducer,
  settings: settingsReducer,
  analytics: analyticsReducer,
  integrations: integrationsReducer,
});

export default rootReducer;
