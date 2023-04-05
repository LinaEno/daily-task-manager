export const selectUserName = state => state.auth.userName;

export const selectUserId = state => state.auth.userId;

export const selectStateChange = state => state.auth.stateChange;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectRefreshed = state => state.auth.isRefreshing;
