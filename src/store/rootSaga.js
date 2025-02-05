import { all, call } from 'redux-saga/effects';
import chatbotSaga from './chatbotSaga';
import userSaga from './userSaga';
import automationSaga from './automationSaga';
import settingsSaga from './settingsSaga';
import analyticsSaga from './analyticsSaga';
import integrationsSaga from './integrationsSaga';

// Combine all the individual sagas into a root saga
export default function* rootSaga() {
  yield all([
    call(chatbotSaga),
    call(userSaga),
    call(automationSaga),
    call(settingsSaga),
    call(analyticsSaga),
    call(integrationsSaga),
  ]);
}
