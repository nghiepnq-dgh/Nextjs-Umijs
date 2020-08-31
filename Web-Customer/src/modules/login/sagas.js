/* eslint-disable require-yield */
import { put, takeLatest, takeEvery } from "redux-saga/effects";
import {
  Login,
  LoginFailure,
  LoginSuccess,
  Loginingin,
  SetAccessToken,
  SetUserInfo,
  Logout,
  GetProfile,
  GetProfileSuccess,
  ChangeEmail,
} from "./actions";
import { ENDPOINTS } from "./models";
import { defaultRedirectAfterLogin } from "./handlers";
import { getMyProfile } from "./../user/handlers";
import Router from "next/router";
import { setCookie } from "./../../functions/cookies";
import { redirectTo } from "./../../functions/helpers";
import * as ms from "ms";
import { fetchAuthLoading } from "../../functions/effect";
// import Cookies from 'js-cookie'
import { toast } from "react-nextjs-toast";

function* loginSaga({ payload }) {
  console.log("DEBUG_CODE: function*loginSaga -> payload", payload);
  yield put(Loginingin(true));
  try {
    const response = yield fetchAuthLoading({
      url: ENDPOINTS.login,
      method: "POST",
      data: {
        email: payload.email,
        password: payload.password,
        grantType: payload.grantType,
      },
    });
    console.log("DEBUG_CODE: function*loginSaga -> response", response);
    if (response && response.success) {
      const { accessToken, expiresIn } = response.data;
      console.log("DEBUG_CODE: function*loginSaga -> expires_in", accessToken);
      const currentTime = new Date();
      yield put(
        SetAccessToken({
          token: accessToken,
          expired: 9000000000000000000,
        })
      );
      yield put(ChangeEmail(payload.email));
      yield put(LoginSuccess());
      redirectTo("/");
    } else {
      yield put(LoginFailure(response.message));
    }
  } catch (ex) {
    yield put(LoginFailure(ex.message || ex));
  }
  yield put(Loginingin(false));
}

function* getProfileSaga({ payload }) {
  const profile = yield getMyProfile();
  if (!profile) throw new Error("MISSING_USER_PROFILE");
  yield put(SetUserInfo(profile));
  yield put(GetProfileSuccess({ fullName: profile.fullName }));
  setTimeout(() => {
    if (payload && payload.redirectUrl) {
      Router.replace(payload.redirectUrl);
    } else {
      Router.replace(defaultRedirectAfterLogin());
    }
  }, 1000);
}

function* loginSuccess() {
  // enqueueNotiStack(NotifyType.LoginSuccess, { data: data });
  toast.notify(`Login thanh cog`, {
    // position: top,
    duration: 5,
    type: "success",
  });
  yield put(Loginingin(false));
}

function* getProfileSuccessSaga({ payload }) {
  // enqueueNotiStack(NotifyType.LoginSuccess, {
  //   data: { name: payload.fullName },
  // });
}

function* loginError({ payload }) {
  // if (payload === "USER_NOT_ACTIVE") {
  //   enqueueNotiStack(NotifyType.LoginFailedByNotActive);
  // } else if (payload === "INVALID_CREDENTIALS") {
  //   enqueueNotiStack(NotifyType.LoginFailedByInvalidCredentials);
  // } else {
  //   enqueueNotiStack(NotifyType.LoginFailedDefault);
  // }
  toast.notify(`Login fail`, {
    // position: top,
    duration: 5,
    type: "error",
  });
}

function* logoutSaga({ payload }) {
  yield setCookie("accessToken", "");
  yield setCookie("userInfo", "");
  // enqueueNotiStack(NotifyType.Logout)
  if (!payload || payload.redirect === true) {
    redirectTo("/login");
  }
}

function* watchLatestLogin() {
  console.log("DEBUG_CODE: 111111111212*watchLatestLogin -> watchLatestLogin");
  yield takeLatest(Login.toString(), loginSaga);
}

function* watchLoginSuccess() {
  yield takeLatest(LoginSuccess.toString(), loginSuccess);
}

function* watchLoginFailure() {
  yield takeLatest(LoginFailure.toString(), loginError);
}

function* watchLogout() {
  yield takeLatest(Logout.toString(), logoutSaga);
}

function* watchLatestGetMe() {
  yield takeLatest(GetProfile.toString(), getProfileSaga);
}

function* watchGetMeSuccess() {
  yield takeEvery(GetProfileSuccess.toString(), getProfileSuccessSaga);
}

export default [
  watchLatestLogin(),
  watchLoginSuccess(),
  watchLoginFailure(),
  watchLatestGetMe(),
  watchGetMeSuccess(),
  watchLogout(),
];
