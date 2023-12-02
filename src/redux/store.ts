import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './reducer/counter.reducer';
import themeReducer from './reducer/theme.reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer
  },
  // devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;