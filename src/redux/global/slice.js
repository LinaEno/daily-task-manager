import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalEditTaskOpen: false,
  isModalLogoutOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModalEditTask(state) {
      state.isModalEditTaskOpen = true;
    },
    openModalLogout(state) {
      state.isModalLogoutOpen = true;
    },
    closeModal(state) {
      state.isModalEditTaskOpen = false;
      state.isModalLogoutOpen = false;
    },
  },
});

export const { openModalEditTask, openModalLogout, closeModal } =
  globalSlice.actions;

export const globalReducer = globalSlice.reducer;
