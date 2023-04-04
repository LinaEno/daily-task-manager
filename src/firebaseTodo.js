import { db, storage } from './firebase';
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

const userCollectionRef = collection(db, 'tasks');

//получение данных из базы
export const getData = setData => {
  getDocs(userCollectionRef).then(res =>
    setData(res.docs.map(el => ({ ...el.data(), id: el.id })))
  );
};

// обновление
export const updateTask = (id, obj) => {
  const tasksDoc = doc(db, 'tasks', id);
  updateDoc(tasksDoc, obj);
};

// удаление
export const deleteTask = id => {
  const tasksDoc = doc(db, 'tasks', id);
  deleteDoc(tasksDoc);
};

// создание
// export const createTask = (image, setProgress, data, setTask) => {
//     if (!image) return;
//     const storageRef = ref(storage, image.name)
//     const uploadTask = uploadBytesResumable(storageRef, image)

//     uploadTask.on("state_changed",
//         (snapshot => {
//             const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
//             setProgress(prog)
//         }),
//         (err) => console.log(err),
//         () => {
//                 getDownloadURL(uploadTask.snapshot.ref)
//                     .then(async (url)=> {
//                        await addDoc(userCollectionRef, {...data, image:url})
//                        await getData(setShoes)
//                     })
//         })
// }
