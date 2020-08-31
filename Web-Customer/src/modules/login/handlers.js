import storeAccessible from "../../functions/storeAccessible";
import { fetchLoading } from "../../functions/effect";
import { MODULE_NAME, ENDPOINTS } from "./models";
import { Logout } from "./actions";
import { redirectTo } from "../../functions/helpers";

export const isLogined = () => {
  const authState = storeAccessible.getState(MODULE_NAME);
  return authState.userInfo && authState.accessToken && authState.userInfo;
};

export const isLoginingIn = () => {
  const authState = storeAccessible.getState(MODULE_NAME);
  return authState.isLoginingIn;
};

export const defaultRedirectAfterLogin = () => {
  return goToProfilePage();
};

export const goToProfilePage = () => {
  // const authState = storeAccessible.getState(MODULE_NAME);
  // if (!authState.userInfo) return '/';
  // const { role, type } = authState.userInfo;
  // if (role ===  USER_ROLES.PROVIDER) return '/profile';
  // if (role ===  USER_ROLES.ADMIN) return '/dashboard';
  // if (role ===  USER_ROLES.CUSTOMER) {
  // 	if (type === USER_TYPES.BUSINESS) return '/profile';
  // 	return '/profile';
  // }
  // throw new Error('UNSUPPORT_ROLE');

  return "/profile";
};

export const getAccessToken = () => {
  const authState = storeAccessible.getState(MODULE_NAME);
  return authState.accessToken;
};

export const getProfileInfo = () => {
  const authState = storeAccessible.getState(MODULE_NAME);
  return authState.userInfo;
};

// export const getExpireTime = () => {
//   const authState = storeAccessible.getState(MODULE_NAME);
//   return authState.expireTime;
// };

export const logout = () => {
  storeAccessible.dispatch(Logout());
};

// export const registerUser = async (data) => {
//   return await fetchLoading({
//     url: ENDPOINTS.register,
//     method: "POST",
//     data,
//   });
// };

// export const verifyAccount = async (data) => {
//   return await fetchLoading({
//     url: ENDPOINTS.verifyAccount,
//     method: "POST",
//     data,
//   });
// };

// export const resendToken = async (data) => {
//   return await fetchLoading({
//     url: ENDPOINTS.verifyAccount,
//     params: data,
//   });
// };

// export const getMailResetPassword = async (data) => {
//   return await fetchLoading({
//     url: ENDPOINTS.resetPassword,
//     params: data,
//   });
// };

// export const resetPassword = async (data) => {
//   return await fetchLoading({
//     url: ENDPOINTS.resetPassword,
//     method: "POST",
//     data,
//   });
// };

// export const handleAuthSSR = (ctx = {}) => {
//   const accessToken = getAccessToken();
//   if (accessToken) {
//     const { token, expired } = accessToken;
//     if (!token) {
//       storeAccessible.dispatch(Logout({ redirect: false }));
//       redirectTo("/login?error=missing_token", ctx.res);
//       return null;
//     }

//     const currentTime = new Date().getTime();
//     if (currentTime > expired) {
//       storeAccessible.dispatch(Logout({ redirect: false }));
//       redirectTo("/login?error=expired", ctx.res);
//       return null;
//     }

//     return token;
//   }
//   redirectTo("/login", ctx.res);
//   return;
// };
export const getMyProfile = () => {
  return fetchAuthLoading({
    url: ENDPOINTS.getMe,
  }).then((response) => {
    storeAccessible.dispatch(SetUserInfo(response.data));
    return response.data;
  });
};
