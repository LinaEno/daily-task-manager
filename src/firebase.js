import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from '@firebase/auth';
import { initializeApp } from '@firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCyxHIH5yyCBsrssl9al46wXw2j2wqhOBs',
  authDomain: 'task-manager-f6855.firebaseapp.com',
  projectId: 'task-manager-f6855',
  storageBucket: 'task-manager-f6855.appspot.com',
  messagingSenderId: '40553423896',
  appId: '1:40553423896:web:530044a9763e393a76cf6d',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
