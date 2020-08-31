import { handleActions } from 'redux-actions'
import * as actions from '../actions/common'
import { setCookie } from './../../functions/cookies';

export const defaultState = {
  language: 'vi',
  timeout: 30000,
  setting: {},
  services: [],
  notifications: []
}

const handlers = {
  [actions.clearAll]: () => ({ ...defaultState }),
  [actions.SetListServices]: (state, action) => ({
    ...state,
    services: action.payload,
  }),
  [actions.setLanguage]: (state, action) => {
    setCookie('language', action.payload);
    return {
      ...state,
      language: action.payload,
    }
  },
  [actions.AddNotification]: (state, action) => {
    return {
      ...state,
      notifications: [...state.notifications, { ...action.payload }],
    };
  },
  [actions.RemoveNotification]: (state, action) => {
    return {
      ...state,
      notifications: state.notifications.filter(
        notification => notification.key !== action.payload,
      ),
    };
  }
}

export default handleActions(handlers, defaultState)
