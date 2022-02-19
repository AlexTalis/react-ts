import { configureStore, createSlice } from "@reduxjs/toolkit";
import { State } from "./types";

export const rootSlice = createSlice({
  name: "root",
  initialState: {} as State,
  reducers: {},
});
