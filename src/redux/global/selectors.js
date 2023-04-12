export const selectIsModalEditTaskOpen = state =>
  state.global.isModalEditTaskOpen;

export const selectLogoutModalOpen = state => state.global.isModalLogoutOpen;
export const selectEditingTaskId = state => state.global.editingTaskId;
export const selectEditProfileModal = state =>
  state.global.isModalEditProfileOpen;

export const selectTheme = state => state.global.themeTitle;
