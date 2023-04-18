import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from '@firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';
import {
  doc,
  setDoc,
  updateDoc,
  collection,
  getDocs,
  deleteDoc,
} from '@firebase/firestore';
import { auth, db, storage } from '../../firebase';

export const createAccount = createAsyncThunk(
  'auth/createAccount',
  async ({ email, password, userName, file }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const storageRef = ref(storage, `images/${Date.now() + userName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      const downloadURL = await new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          () => {},
          reject,
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            await updateProfile(user, {
              displayName: userName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, 'users', user.uid), {
              uid: user.uid,
              displayName: userName,
              email,
              photoURL: downloadURL,
            });
            resolve(downloadURL);
          }
        );
      });

      const serializableUser = {
        displayName: user.displayName,
        uid: user.uid,
        photoURL: downloadURL,
        email: user.email,
      };

      return serializableUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const serializableUser = {
        displayName: user.displayName,
        uid: user.uid,
        photoURL: user.photoURL,
        email: user.email,
      };

      return serializableUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error(error);
  }
});
export const requestAllTasks = createAsyncThunk(
  'tasks/all',
  async (_, { getState }) => {
    const currentUserUid = getState().auth.currentUserUid;
    try {
      const userTasksRef = collection(db, 'users', currentUserUid, 'tasks');
      const querySnapshot = await getDocs(userTasksRef);
      const tasksData = querySnapshot.docs.map(doc => doc.data());
      return tasksData;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteTasks = createAsyncThunk(
  'tasks/delete',
  async (taskId, { getState }) => {
    const currentUserUid = getState().auth.currentUserUid;
    try {
      const userTasksRef = collection(db, 'users', currentUserUid, 'tasks');
      const taskRef = doc(userTasksRef, taskId);
      await deleteDoc(taskRef);
      return taskId;
    } catch (error) {
      console.error(error);
    }
  }
);

export const toggleComplete = createAsyncThunk(
  'tasks/toggleComplete',
  async ({ taskId, completed }, { getState }) => {
    const currentUserUid = getState().auth.currentUserUid;
    const userTasksRef = collection(db, 'users', currentUserUid, 'tasks');
    const taskRef = doc(userTasksRef, taskId);
    await updateDoc(taskRef, { completed });
    return { taskId, completed };
  }
);
