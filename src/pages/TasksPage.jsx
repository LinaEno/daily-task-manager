import { Container, MainTitle } from 'components/App.styled';
import useAuth from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  collection,
  collectionGroup,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';

const TasksPage = () => {
  const { currentUser } = useAuth();
  const [tasks, setTasks] = useState([]);

  console.log(tasks);

  useEffect(() => {
    const getAllTasks = async () => {
      // const user = await collection(db, 'users')
      //   .doc(currentUser.uid)
      //   .collection('tasks')
      //   .onSnapshot(doc => {
      //     console.log('Current data: ', doc.data());
      //     setTasks(doc.data());
      //   });
      // await onSnapshot(
      //   doc(db, 'users', currentUser.uid, 'tasks', 'tasks.uid'),
      //   doc => {
      //     console.log('Current data: ', doc.data());
      //     setTasks(doc.data());
      //   }
      // );

      const userTasks = query(
        collectionGroup(db, 'tasks'),
        where('uid', '==', 'tasks.uid')
      );
      const querySnapshot = await getDocs(userTasks);
      querySnapshot.forEach(doc => {
        console.log(doc.id, ' => ', doc.data());
      });

      // const querySnapshot = await getDocs(
      //   collection(db, 'users', currentUser.uid, 'tasks')
      // );
      // querySnapshot.forEach(doc => {
      //   console.log(doc.id, ' => ', doc.data());
      //   console.log(doc);
      //   // let array;
      //   // array.push(doc.data());
      //   // setTasks(array);
      // });

      // await onSnapshot(doc(db, 'tasks', currentUser.tasks.id), doc => {
      //   console.log('Current data: ', doc.data());
      //   setTasks(doc.data());
      // });

      // await onSnapshot(doc(db, 'users', currentUser.uid, 'tasks'), data =>
      //   setTasks(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      // );
    };
    getAllTasks();
  }, [currentUser.uid]);

  return (
    <Container>
      <MainTitle>Daily tasks</MainTitle>
      <ul>
        {tasks.length > 0 &&
          tasks.map(({ title, description }) => {
            return (
              <li>
                <p>Title: {title}</p>
                <p>Description: {description}</p>
              </li>
            );
          })}
      </ul>
    </Container>
  );
};

export default TasksPage;
