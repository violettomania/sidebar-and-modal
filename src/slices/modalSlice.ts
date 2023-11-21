import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

interface ModalState {
    value: boolean;
};

const initialState: ModalState = {
    value: false,
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        show: state => {
            state.value = true;
        },
        hide: state => {
            state.value = false;
        },
    }
});

export const { show, hide } = modalSlice.actions;

export const selectModal = (state: RootState) => state.value;

export default modalSlice.reducer;
