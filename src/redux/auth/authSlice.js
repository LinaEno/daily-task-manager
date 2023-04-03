// import { createSlice } from '@reduxjs/toolkit';
// import { registration, logIn, logOut, fetchCurrentUser } from './authOperation';

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   isLoading: false,
//   error: null,
//   isRefreshing: true,
// };

// //////////////////////////////////////////////

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,

//   extraReducers: builder =>
//     builder
//       .addCase(registration.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(registration.fulfilled, (state, { payload }) => {
//         state.user = payload.user;
//         state.token = payload.token;
//         state.isLoggedIn = true;
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addCase(registration.rejected, (state, { payload }) => {
//         state.error = payload;
//       })

//       .addCase(logIn.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(logIn.fulfilled, (state, { payload }) => {
//         state.user = payload.user;
//         state.token = payload.token;
//         state.isLoggedIn = true;
//         state.error = null;
//         state.isLoading = false;
//       })
//       .addCase(logIn.rejected, (state, { payload }) => {
//         state.error = payload;
//       })
//       .addCase(logOut.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(logOut.fulfilled, state => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false;
//         state.error = null;
//         state.isLoading = false;
//       })
//       .addCase(logOut.rejected, (state, { payload }) => {
//         state.error = payload;
//       })
//       .addCase(fetchCurrentUser.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
//         state.user = payload;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//         state.isLoading = false;
//         state.isLoading = false;
//       })
//       .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
//         state.isRefreshing = false;
//         state.isLoading = false;
//         state.error = payload;
//       }),
// });

// export const authReducer = authSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  userName: null,
  stateChange: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      userName: payload.userName,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authSignOut: () => initialState,
  },
});
export const authReducer = authSlice.reducer;
