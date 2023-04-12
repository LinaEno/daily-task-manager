import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalEditTaskOpen: false,
  isModalEditProfileOpen: false,
  isModalLogoutOpen: false,
  editingTaskId: null,
  themeTitle: 'light',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModalEditTask(state, { payload }) {
      state.isModalEditTaskOpen = true;
      state.editingTaskId = payload;
    },
    openModalEditProfile(state) {
      state.isModalEditProfileOpen = true;
    },
    openModalLogout(state) {
      state.isModalLogoutOpen = true;
    },
    closeModal(state) {
      state.isModalEditTaskOpen = false;
      state.isModalLogoutOpen = false;
      state.editingTaskId = null;
      state.isModalEditProfileOpen = false;
    },
    toggleThemeTitle(state) {
      state.themeTitle = state.themeTitle === 'light' ? 'dark' : 'light';
    },
  },
});

export const {
  openModalEditTask,
  openModalLogout,
  closeModal,
  toggleThemeTitle,
  openModalEditProfile,
} = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
