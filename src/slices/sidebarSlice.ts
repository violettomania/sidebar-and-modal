import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

interface SidebarState {
  value: boolean;
}

const initialState: SidebarState = {
  value: false,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    show: (state) => {
      state.value = true;
    },
    hide: (state) => {
      state.value = false;
    },
  },
});

export const { show, hide } = sidebarSlice.actions;

export const selectSidebar = (state: RootState) => state.value;

export default sidebarSlice.reducer;
