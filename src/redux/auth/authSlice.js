import { createSlice } from '@reduxjs/toolkit';
import {
  createAccount,
  deleteTasks,
  login,
  logout,
  requestAllTasks,
  toggleComplete,
} from './authOperation';

const initialState = {
  currentUserUid: null,
  loading: false,
  error: null,
  currentUser: null,
  completedTasks: [],
  activeTasks: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
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
        state.currentUser = action.payload;
        state.currentUserUid = action.payload.uid;
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, state => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.currentUserUid = action.payload.uid;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.pending, state => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, state => {
        state.currentUserUid = null;
        state.currentUser = null;
        state.loading = false;
      })
      .addCase(requestAllTasks.pending, state => {
        state.error = null;
      })
      .addCase(requestAllTasks.fulfilled, (state, action) => {
        state.completedTasks = action.payload.filter(task => task.completed);
        state.activeTasks = action.payload.filter(task => !task.completed);
      })
      .addCase(deleteTasks.pending, state => {
        state.error = null;
      })
      .addCase(deleteTasks.fulfilled, (state, action) => {
        state.completedTasks = state.completedTasks.filter(
          task => task.id !== action.payload
        );
        state.activeTasks = state.activeTasks.filter(
          task => task.id !== action.payload
        );
      })
      .addCase(toggleComplete.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(toggleComplete.fulfilled, (state, action) => {
        const { taskId, completed } = action.payload;
        state.activeTasks = state.activeTasks.map(task => {
          if (task.id === taskId) {
            return { ...task, completed };
          }
          return task;
        });
        state.completedTasks = state.completedTasks.map(task => {
          if (task.id === taskId) {
            return { ...task, completed };
          }
          return task;
        });
      })

      .addCase(toggleComplete.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCurrentUser, updateCurrentUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
