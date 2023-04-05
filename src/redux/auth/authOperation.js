import { authSlice } from './authSlice';
import { auth, db } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { createAsyncThunk } from '@reduxjs/toolkit';
// const { registration, login, logout } = authSlice.actions;

export const registration = createAsyncThunk(
  'auth/registration',
  async (credential, thunkAPI) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        credential.email,
        credential.password
      ).then(async result => {
        try {
          const docRef = await addDoc(collection(db, 'users'), {
            userName: `${result.user.userName}`,
            userId: `${result.user.uid}`,
          });
          console.log(docRef.id);
        } catch (error) {
          console.log(error);
        }
      });
      console.log(result);
      return result;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credential, thunkAPI) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        credential.email,
        credential.password
      );
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// export const registration = createAsyncThunk(
//   'auth/registration',
//   async (credential, thunkAPI) => {
//     try {
//       const result = await createUserWithEmailAndPassword(
//         auth,
//         credential.email,
//         credential.password
//       );
//       console.log(result);
//       return result;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// export const authSignUpUser =
//   ({ email, password, userName }) =>
//   async (dispatch, getState) => {
//     await createUserWithEmailAndPassword(auth, email, password).then(
//       ({ user }) => {
//         dispatch(
//           updateUserProfile({
//             userId: user.uid,
//             userName: user.displayName,
//           })
//         );
//       }
//     );
//   };
// export const authSignUpUser =
//   ({ email, password, userName }) =>
//   async (dispatch, getState) => {
//     try {
//       await createUserWithEmailAndPassword(email, password);

//       //   const user = await auth.currentUser;

//       //   await user.updateProfile({
//       //     displayName: userName,
//       //   });

//       const { displayName, uid } = await auth.currentUser;

//       const userUpdateProfile = {
//         userName: displayName,
//         userId: uid,
//       };

//       dispatch(updateUserProfile(userUpdateProfile));
//     } catch (error) {
//       console.log('error', error);

//       console.log('error.message', error.message);
//     }
//   };

// export const authSignInUser =
//   ({ email, password }) =>
//   async (dispatch, getState) => {
//     try {
//       const user = await app.auth().signInWithEmailAndPassword(email, password);
//       console.log('user', user);
//     } catch (error) {
//       console.log('error', error);
//       console.log('error.code', error.code);
//       console.log('error.message', error.message);
//     }
//   };

// export const authSignOutUser = () => async (dispatch, getState) => {
//   await app.auth().signOut();
//   dispatch(authSignOut());
// };

// export const authStateChangeUser = () => async (dispatch, getState) => {
//   await app.auth().onAuthStateChanged(user => {
//     if (user) {
//       const userUpdateProfile = {
//         userName: user.displayName,
//         userId: user.uid,
//       };

//       dispatch(authStateChange({ stateChange: true }));
//       dispatch(updateUserProfile(userUpdateProfile));
//     }
//   });
// };
