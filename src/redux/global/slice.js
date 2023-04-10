import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalEditTaskOpen: false,
  isModalLogoutOpen: false,
  editingTaskId: null,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModalEditTask(state, { payload }) {
      state.isModalEditTaskOpen = true;
      state.editingTaskId = payload;
    },
    openModalLogout(state) {
      state.isModalLogoutOpen = true;
    },
    closeModal(state) {
      state.isModalEditTaskOpen = false;
      state.isModalLogoutOpen = false;
      state.editingTaskId = null;
    },
  },
});

export const { openModalEditTask, openModalLogout, closeModal } =
  globalSlice.actions;

export const globalReducer = globalSlice.reducer;
