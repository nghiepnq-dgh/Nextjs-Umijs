import { fetchAuthLoading } from "../../functions/effect";
import { ENDPOINTS } from "./models";
import storeAccessible from "./../../functions/storeAccessible";
import { SetUserInfo } from "./../login/actions";

export const getMyProfile = () => {
  return fetchAuthLoading({
    url: ENDPOINTS.getMe,
  }).then((response) => {
    storeAccessible.dispatch(SetUserInfo(response.data));
    return response.data;
  });
};
