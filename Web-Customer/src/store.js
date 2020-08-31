/* eslint-disable no-undef */
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import createSaga from "./common/middlewares";
import { reducer as formReducer } from "redux-form";

import commonReducers from "./common/reducers/common";
import sessionReducers from "./common/reducers/session";
import modulesReducers from "./modules";

const sagaMiddleware = createSagaMiddleware();
const { composeWithDevTools } = require("redux-devtools-extension");

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    return composeEnhancers(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const createReducers = (initialState) => {
  return combineReducers({
    common: commonReducers,
    session: sessionReducers,
    form: formReducer,
    ...modulesReducers(initialState),
  });
};

export const initializeStore = (initialState) => {
  const rootReducer = createReducers(initialState);
  const middlewares = [
    sagaMiddleware,
    process.env.NODE_ENV !== "production" && logger,
  ].filter(Boolean);

  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware(middlewares)
  );
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(rootReducer);
    });
  }

  // store.runSagaTask = () => {
  //   store.sagaTask = sagaMiddleware.run(rootSaga(store.getState));
  // };

  store.reducers = rootReducer;
  sagaMiddleware.run(createSaga(store.getState));
  return store;
};
