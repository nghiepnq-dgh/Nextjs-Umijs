import useSWR from "swr";
import axios from "axios";
import { response } from "express";
const TIMEOUT = 30000;

// import {
//   fetchStart,
//   fetchSuccess,
//   fetchFailure,
// } from "./../common/actions/session";

// import {
//   getAccessToken,
//   getExpireTime,
//   handleAuthSSR,
// } from "./../modules/auth/handlers";
// import { Logout } from "../modules/auth/actions";

export function fetch({ url, headers, ...options }) {
  return axios({
    method: "GET",
    timeout: TIMEOUT,
    url,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...options,
  })
    .then((response) => {
      return { success: true, ...response };
    })
    .catch((error) => {
      const { response = {} } = error;
      if (response) {
        throw response.data;
      }
      throw error;
    });
}

export function fetchLoading({ url, headers, ...options }) {
  return axios({
    method: "GET",
    timeout: TIMEOUT,
    url,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...options,
  })
    .then((response) => {
      return { success: true, ...response };
    })
    .catch((error) => {
      const { response = {} } = error;
      if (response) {
        throw response.data;
      }
      throw error;
    });
}

export function fetchAuthLoading({ url, headers, ...options }) {
  const key = url && JSON.stringify(url);
  //   const token = handleAuthSSR();
  return axios({
    method: "GET",
    timeout: TIMEOUT,
    url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...headers,
    },
    ...options,
  })
    .then((response) => {
      return { success: true, ...response };
    })
    .catch((error) => {
      const { response = {} } = error;
      console.log("response", response);
      if (response) {
        if (response.status === 401) {
          //   storeAccessible.dispatch(Logout());
        }
        throw response.data;
      }
      throw error;
    });
}

export function fetchPrioritizeAuth({ url, headers, ...options }) {
  let isAuth = false;
  if (accessToken) {
    const { token, expired } = accessToken;
    const currentTime = new Date().getTime();
    if (token && currentTime < expired) {
      url += "/with-auth";
      isAuth = true;
    }
  }
  return axios({
    method: "GET",
    timeout: TIMEOUT,
    url,
    headers: {
      "Content-Type": "application/json",
      Authorization: isAuth && `Bearer ${accessToken.token}`,
      ...headers,
    },
    ...options,
  })
    .then((response) => {
      return { success: true, ...response };
    })
    .catch((error) => {
      const { response = {} } = error;
      if (response) {
        throw response.data;
      }
      throw error;
    });
}

export function useRequest(request, { initialData, ...config } = {}) {
  const { data: response, error, isValidating, mutate } = useSWR(
    request && JSON.stringify(request),
    () => axios(request || {}),
    {
      ...config,
      initialData: initialData && {
        status: 200,
        statusText: "InitialData",
        headers: {},
        data: initialData,
      },
    }
  );

  return {
    data: response && response.data,
    response,
    error,
    isValidating,
    mutate,
  };
}

// export async function fetchAuthReferral({ url, headers, token, ...options }) {
//   const responst = await axios({
//     method: "GET",
//     timeout: TIMEOUT,
//     url,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//       ...headers,
//     },
//     ...options,
//   });
//   if (response && response.data && !response.data.message) {
//     return { success: true, ...response.data };
//   } else {
//     return { success: false, ...response.data };
//   }
// }
