import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import timerReducer from "./features/timerSlice";
import meditationReducer from "./features/meditationSlice";
import soundReducer from "./features/soundSlice";
import darkModeReducer from "./features/darkModeSlice";

const reducers = combineReducers({
  timer: timerReducer,
  meditation: meditationReducer,
  sound: soundReducer,
  darkMode: darkModeReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["darkMode"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
