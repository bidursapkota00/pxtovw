import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { createLogger } from "redux-logger";

import { createWrapper } from "next-redux-wrapper";

import { persistStore, persistReducer } from "redux-persist";
import storage from "../../util/storage-persist"; //to debug failed to create sync storage

import rootReducer from "../modules/reducers";
import { watcherSaga } from "../sagas/rootSaga";

/* ----------------------------- Saga Middleware ---------------------------- */
const sagaMiddleware = createSagaMiddleware();

/* ------------------------------ Redux Config ------------------------------ */
const persistConfig = {
  timeout: 0,
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* ------------------------------ Logger Config ----------------------------- */
const logger = createLogger({
  level: "info",
  collapsed: true,
});

/* ---------------------------------- Store --------------------------------- */
export const createStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: [sagaMiddleware, logger],
    //getDefaultMiddleware shows error when it sees non-serilaize object
    devTools: true, //default
  });
  persistStore(store);
  sagaMiddleware.run(watcherSaga);
  return store;
};

export const wrapper = createWrapper(createStore);
