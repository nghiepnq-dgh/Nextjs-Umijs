import useSWR from "swr";
import axios from "axios";
import storeAccessible from "./storeAccessible";
const TIMEOUT = 30000;

import {
  fetchStart,
  fetchSuccess,
  fetchFailure,
} from "./../common/actions/session";

import {
  getAccessToken,
  getExpireTime,
  // handleAuthSSR,
} from "./../modules/login/handlers";
import { Logout } from "../modules/login/actions";
import { configurations } from "../../config";

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
  const key = url && JSON.stringify(url);

  storeAccessible.dispatch(fetchStart({ config: { key } }));
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
      storeAccessible.dispatch(fetchSuccess({ config: { key } }));
      return { success: true, ...response };
    })
    .catch((error) => {
      storeAccessible.dispatch(fetchFailure({ config: { key } }));
      const { response = {} } = error;
      if (response) {
        throw response.data;
      }
      throw error;
    });
}

export async function fetchAuthLoading({ url, headers, ...options }) {
  const key = url && JSON.stringify(url);
  const dataClient = {
    userid: configurations.emailClient,
    password: configurations.pass,
    grantType: "client_account",
  };
  // const token = handleAuthSSR();
  let token;
  const respontoken = await getTokenClientAdmin({
    url: `${configurations.urlApi}/v2/auth/token`,
    method: "POST",
    data: { ...dataClient },
  });
  if (respontoken && respontoken.success) {
    token = respontoken.accessToken;
  } else {
    toast.notify("Không tìm thấy Admin Client", {
      // position: top,
      duration: 5,
      type: "error",
    });
    // <div className={classes.root}>
    //   <Alert severity="error">Không tìm thấy Admin Client</Alert>
    // </div>;
    return;
  }
  storeAccessible.dispatch(fetchStart({ config: { key } }));
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
      storeAccessible.dispatch(fetchSuccess({ config: { key } }));
      return { success: true, ...response };
    })
    .catch((error) => {
      storeAccessible.dispatch(fetchFailure({ config: { key } }));
      const { response = {} } = error;
      console.log("response", response);
      if (response) {
        if (response.status === 401) {
          storeAccessible.dispatch(Logout());
        }
        throw response.data;
      }

      throw error;
    });
}

export function fetchPrioritizeAuth({ url, headers, ...options }) {
  const accessToken = getAccessToken();
  let isAuth = false;

  if (accessToken) {
    const { token, expired } = accessToken;
    const currentTime = new Date().getTime();
    if (token && currentTime < expired) {
      url += "/with-auth";
      isAuth = true;
    }
  }

  const key = url && JSON.stringify(url);
  storeAccessible.dispatch(fetchStart({ config: { key } }));

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
      storeAccessible.dispatch(fetchSuccess({ config: { key } }));
      return { success: true, ...response };
    })
    .catch((error) => {
      storeAccessible.dispatch(fetchFailure({ config: { key } }));
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

export async function fetchAuthReferral({ url, headers, token, ...options }) {
  const response = await axios({
    method: "GET",
    timeout: TIMEOUT,
    url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...headers,
    },
    ...options,
  });
  if (response && response.data && !response.data.message) {
    return { success: true, ...response.data };
  } else {
    return { success: false, ...response.data };
  }
}

export async function getTokenClientAdmin({ url, headers, ...options }) {
  const response = await axios({
    method: "GET",
    timeout: TIMEOUT,
    url,
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
      ...headers,
    },
    ...options,
  });
  if (response && response.data && !response.data.message) {
    return { success: true, ...response.data };
  } else {
    return { success: false, ...response.data };
  }
}
