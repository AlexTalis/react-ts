import { createSlice } from '@reduxjs/toolkit';
import { State } from './types';

const initialState: State = {
  rows: [],
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {},
});
