import { createSlice } from '@reduxjs/toolkit';
import { createAccount, login, logout } from './authOperation';

const initialState = {
  currentUserUid: null,
  loading: false,
  error: null,
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    clearCurrentUser: state => {
      state.currentUser = null;
    },
    updateCurrentUser: (state, action) => {
      state.currentUser = { ...state.currentUser, ...action.payload };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createAccount.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUserUid = action.payload;
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.currentUserUid = action.payload.uid;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, state => {
        state.currentUserUid = null;
        state.currentUser = null;
      });
  },
});

export const { setCurrentUser, clearCurrentUser, updateCurrentUser } =
  authSlice.actions;

export const authReducer = authSlice.reducer;
