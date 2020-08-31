import { getBackendURL } from "../../common/models";
export const MODULE_NAME = "customer";

const makeUrl = (path) => {
  return `${getBackendURL()}/${MODULE_NAME}/${path}`;
};

export const ENDPOINTS = {
  login: makeUrl("customer-login"),
};
