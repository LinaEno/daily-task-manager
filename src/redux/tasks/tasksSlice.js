import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTasks,
  toggleComplete,
  deleteTask,
  createTask,
} from './operations';
import { logout } from 'redux/auth/authOperation';

const initialState = {
  tasks: [],
  error: null,
  taskId: null,
  loading: false,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    resetTasksState: () => {
      return initialState;
    },
    loginTaskState: (state, action) => {
      state.tasks = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        console.log('fetch', action.payload);
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        console.log('create', action.payload);
        state.tasks = [...state.tasks, action.payload];
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
      })
      .addCase(toggleComplete.fulfilled, (state, action) => {
        state.taskId = action.payload;
        state.tasks = state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        );
      });
  },
});
export const { resetTasksState, loginTaskState } = tasksSlice.actions;
export default tasksSlice.reducer;
