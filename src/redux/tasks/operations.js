import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addDoc,
  collection,
  collectionGroup,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../../firebase';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, thunkAPI) => {
    try {
      const { currentUserUid } = thunkAPI.getState().auth;
      console.log(thunkAPI.getState());
      const tasksRef = collection(db, 'tasks');
      const querySnapshot = await getDocs(
        query(tasksRef, where('userId', '==', currentUserUid))
      );
      const { tasks } = thunkAPI.getState().tasks;
      // let tasks = [];
      querySnapshot.forEach(doc => {
        console.log('док дата', doc.data());
        tasks.push({ id: doc.id, ...doc.data() });
      });
      console.log('таски после пуша', tasks);
      return tasks;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const createTask = createAsyncThunk(
  'tasks/createTask',
  async ({ userId, task }, thunkAPI) => {
    try {
      const tasksRef = await addDoc(
        collection(db, `users/${userId}/tasks`),
        task
      );
      const newTaskId = tasksRef.id;
      const newTask = { ...task, id: newTaskId };
      return newTask;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      await deleteDoc(doc(db, 'tasks', taskId));
      return taskId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleComplete = createAsyncThunk(
  'tasks/toggleComplete',
  async (taskId, thunkAPI) => {
    try {
      const { currentUserUid } = thunkAPI.getState().auth;

      const taskRef = doc(db, 'users', currentUserUid, 'tasks', taskId);
      await updateDoc(taskRef, {
        completed: true,
      });
      return taskId;
    } catch (e) {
      console.log(e.message);
      console.error(e);
    }
  }
);

// const washingtonRef = doc(db, 'cities', 'DC');

// // Set the "capital" field of the city 'DC'
// await updateDoc(washingtonRef, {
//   capital: true,
// });
