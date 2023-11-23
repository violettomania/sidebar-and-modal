import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

interface ModalState {
  value: boolean;
}

const initialState: ModalState = {
  value: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state) => {
      state.value = true;
    },
    hideModal: (state) => {
      state.value = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal.value;

export default modalSlice.reducer;
