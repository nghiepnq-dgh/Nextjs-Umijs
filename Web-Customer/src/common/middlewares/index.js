/* eslint-disable no-unused-vars */
import { all } from "redux-saga/effects";
import commonSagas from "./sagas";

import loginSaga from "./../../modules/login/sagas";
// import solutionsSagas from './../../modules/solutions/sagas';
// import profileProviderSagas from './../../modules/profileProvider/sagas';
// import productSage from './../../modules/product/sagas';

export default () => {
  function* rootSaga() {
    yield all([
      ...loginSaga,
      // ...commonSagas,
      // ...authnSagas,
      // ...solutionsSagas,
      // ...profileProviderSagas,
      // ...profileCustomerSagas
    ]);
  }
  return rootSaga;
};
