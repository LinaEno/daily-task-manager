import { useContext, createContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth, db } from '../../firebase';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

const userContext = createContext();

export const useAuth = () => useContext(userContext);

const UserAuthContext = ({ children }) => {
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) setCurrentUser(user);
    });
  }, [currentUser]);

  const SignUp = async (email, password, userName) => {
    setError('');
    createUserWithEmailAndPassword(auth, email, password).then(async result => {
      try {
        const docRef = await addDoc(collection(db, 'users'), {
          userName,
          userId: `${result.user.uid}`,
        });
        console.log(docRef.id);
      } catch (error) {
        console.log(error);
      }
    });
  };
  const value = {
    SignUp,
    error,
    currentUser,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserAuthContext;
