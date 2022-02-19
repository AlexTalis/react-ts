import { configureStore } from "@reduxjs/toolkit";
import { rootSlice } from "./reducer";

export const store = configureStore({
  reducer: rootSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export const AppDispatch = typeof store.dispatch;
