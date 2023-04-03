// import * as firebase from 'firebase/app';
// import 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCyxHIH5yyCBsrssl9al46wXw2j2wqhOBs',
//   authDomain: 'task-manager-f6855.firebaseapp.com',
//   projectId: 'task-manager-f6855',
//   storageBucket: 'task-manager-f6855.appspot.com',
//   messagingSenderId: '40553423896',
//   appId: '1:40553423896:web:530044a9763e393a76cf6d',
// };

// console.log(firebase);
// // firebase.initializeApp(firebaseConfig);
// export default firebase;

//now < 1683061200000

// Import the functions you need from the SDKs you need
// import initializeApp from 'firebase/app';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: 'AIzaSyCyxHIH5yyCBsrssl9al46wXw2j2wqhOBs',
//   authDomain: 'task-manager-f6855.firebaseapp.com',
//   projectId: 'task-manager-f6855',
//   storageBucket: 'task-manager-f6855.appspot.com',
//   messagingSenderId: '40553423896',
//   appId: '1:40553423896:web:530044a9763e393a76cf6d',
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

// // export default app;
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCyxHIH5yyCBsrssl9al46wXw2j2wqhOBs',
  authDomain: 'task-manager-f6855.firebaseapp.com',
  projectId: 'task-manager-f6855',
  storageBucket: 'task-manager-f6855.appspot.com',
  messagingSenderId: '40553423896',
  appId: '1:40553423896:web:530044a9763e393a76cf6d',
};

export const app = initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };
