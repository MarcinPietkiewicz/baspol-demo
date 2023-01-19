import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "../features/clients/client-slice";

export const store = configureStore({
  reducer: {
    clients: clientReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
