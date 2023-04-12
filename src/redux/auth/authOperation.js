import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from '@firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';
import { doc, setDoc } from '@firebase/firestore';
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
      await new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          () => {},
          reject,
          () => resolve()
        );
      });
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
        mood: user.mood,
      });
      return user.uid;
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
      return user;
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
