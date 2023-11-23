import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../slices/modalSlice';
import sidebarReducer from '../slices/sidebarSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    sidebar: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
