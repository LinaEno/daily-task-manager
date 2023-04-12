import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from '@firebase/auth';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from '@firebase/storage';
import { doc, setDoc, updateDoc } from '@firebase/firestore';
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
      });
      return user.uid;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const updateUserProfile = createAsyncThunk(
//   'auth/updateProfile',
//   async ({ displayName, photoFile }, { getState, rejectWithValue }) => {
//     try {
//       const currentUser = auth.currentUser;
//       if (!currentUser) {
//         throw new Error('User not logged in');
//       }

//       const updatedFields = {};
//       if (displayName) {
//         updatedFields.displayName = displayName;
//       }
//       if (photoFile) {
//         const storageRef = ref(
//           storage,
//           `images/${Date.now()}_${photoFile.name}`
//         );
//         const snapshot = await uploadBytes(storageRef, photoFile);
//         const downloadURL = await getDownloadURL(snapshot.ref);
//         updatedFields.photoURL = downloadURL;
//       }

//       await currentUser.updateProfile(updatedFields);
//       await updateDoc(doc(db, 'users', currentUser.uid), {
//         displayName: displayName || currentUser.displayName,
//         photoURL: updatedFields.photoURL || currentUser.photoURL,
//       });

//       // update redux state
//       const currentUserUid = getState().auth.currentUser.uid;
//       const updatedUserData = {
//         uid: currentUserUid,
//         displayName: displayName || currentUser.displayName,
//         photoURL: updatedFields.photoURL || currentUser.photoURL,
//       };
//       dispatch(updateCurrentUser(updatedUserData));
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

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
