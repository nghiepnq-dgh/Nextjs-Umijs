import { createAction } from "redux-actions";

export const Login = createAction("LOGIN");
export const ChangeEmail = createAction("CHANGE_EMAIL");
export const ChangePassword = createAction("CHANGE_PASSWORD");
export const LoginFailure = createAction("LOGIN_FAILURE");
export const LoginSuccess = createAction("LOGIN_SUCCESS");
export const Loginingin = createAction("LOGGING_IN");
export const GetProfile = createAction("GET_PROFILE");
export const SetUserInfo = createAction("SET_USER_INFO");
export const SetAccessToken = createAction("SET_ACCESS_TOKEN");
export const SetTokenExpireTime = createAction("SET_TOKEN_EXPIRE_TIME");
export const GetProfileSuccess = createAction("GET_PROFILE_SUCCESS");
export const Logout = createAction("LOGOUT");
