import { authSlice } from './authSlice';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const { updateUserProfile, authStateChange, authSignOut } = authSlice.actions;
console.log(auth);

// export const authSignUpUser =
//   ({ email, password, userName }) =>
//   async (dispatch, getState) => {
//     try {
//       await createUserWithEmailAndPassword(email, password);

//       const user = await auth.currentUser;

//       await user.updateProfile({
//         displayName: userName,
//       });

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
