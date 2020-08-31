import { getBackendURL } from "../../common/models";

export const MODULE_NAME = "/v2/auth";

const makeUrl = (path) => {
  return `${getBackendURL()}/${MODULE_NAME}/${path}`;
};

export const ENDPOINTS = {
  getMe: makeUrl("me"),
};
