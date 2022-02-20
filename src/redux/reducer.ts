import { createSlice } from '@reduxjs/toolkit';
import { State } from './types';

const initialState: State = {};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {},
});
