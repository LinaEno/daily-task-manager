// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
// import { getAuth } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js';
import { getAuth } from '@firebase/auth';
import { initializeApp } from '@firebase/app';

// import { getAuth } from 'https://cdn.jsdelivr.net/npm/firebase@^9.19.0/firebase-auth.js/+esm';
const firebaseConfig = {
  apiKey: 'AIzaSyCyxHIH5yyCBsrssl9al46wXw2j2wqhOBs',
  authDomain: 'task-manager-f6855.firebaseapp.com',
  projectId: 'task-manager-f6855',
  storageBucket: 'task-manager-f6855.appspot.com',
  messagingSenderId: '40553423896',
  appId: '1:40553423896:web:530044a9763e393a76cf6d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const fbDatabase = getDatabase(app);
export const db = getFirestore(app);
// export const fStorage = getStorage(app);

console.log(app);
console.log(auth);
