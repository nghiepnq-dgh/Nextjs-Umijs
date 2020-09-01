import { handleActions } from "redux-actions";
import * as actions from "./actions";
import { MODULE_NAME } from "./models";
import { omit } from "lodash";
import { setCookie } from "../../common/utils/cookies";
// import Cookies from 'js-cookie'

const defaultState = {
  email: null,
  userInfo: null,
  accessToken: {
    token: null,
    expired: 0,
  },
  isLoggedIn: false,
  isLoginingIn: false,
};

const handlers = {
  [actions.ChangeEmail]: (state, action) => {
    setCookie("email", action.payload);
    return {
      ...state,
      email: action.payload,
    };
  },
  [actions.SetUserInfo]: (state, action) => {
    const profile = omit(action.payload, [
      "oauthFacebookId",
      "oauthGoogleId",
      "password",
      "createdAt",
      "updatedAt",
      "temptLogined",
      "description",
    ]);
    setCookie("userInfo", JSON.stringify(profile));
    return {
      ...state,
      userInfo: action.payload,
    };
  },
  [actions.SetAccessToken]: (state, action) => {
    setCookie("accessToken", JSON.stringify(action.payload));
    return {
      ...state,
      accessToken: action.payload,
    };
  },
  [actions.LoginSuccess]: (state) => ({
    ...state,
    isLoggedIn: true,
  }),
  [actions.LoginFailure]: (state) => ({
    ...state,
    isLoggedIn: false,
  }),
  [actions.Loginingin]: (state, action) => ({
    ...state,
    isLoginingIn: action.payload,
  }),
  [actions.Logout]: () => ({ ...defaultState }),
};

export const NAME = MODULE_NAME;

export default handleActions(handlers, defaultState);
