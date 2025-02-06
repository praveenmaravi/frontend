// frontend/src/store/reducers/index.js

import { combineReducers } from 'redux';
import chatbotReducer from './chatbotReducer';
import userReducer from './userReducer';
import analyticsReducer from './analyticsReducer';
import automationReducer from './automationReducer';
import settingsReducer from './settingsReducer';
import notificationsReducer from './notificationsReducer';
import integrationsReducer from './integrationsReducer';
import securityReducer from './securityReducer';

const rootReducer = combineReducers({
  chatbot: chatbotReducer,
  user: userReducer,
  analytics: analyticsReducer,
  automation: automationReducer,
  settings: settingsReducer,
  notifications: notificationsReducer,
  integrations: integrationsReducer,
  security: securityReducer,
});

export default rootReducer;
