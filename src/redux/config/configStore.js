// eslint-disable-next-line

import logger from "redux-logger";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import uploadFileSlice from "../modules/uploadFileSlice";
import userInfoSlice from "../modules/useInfoSlice";

const reducer = combineReducers({
  uploadFileSlice,
  userInfoSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
  devTools: true,
});

export default store;
